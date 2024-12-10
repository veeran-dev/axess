import React, { useCallback } from 'react';
import { Action, FilterItem } from './tableInterface';
import { useTableContext } from './tableContext';
import Dropdown from '../Dropdown';
import Button from '../elements/button';
import { MemoizedSearch } from '../elements/searchInput';


const TableActions = () => {
  const { onSearch, filter, actions } = useTableContext();

  const search = useCallback(
    (query: string) => {
      if (onSearch) {
        onSearch(query);
      }
    },
    [onSearch]
  );

  if(onSearch === undefined && filter === undefined && actions=== undefined){
    return <></>
  }

  return (
    <div className="mt-4 flex flex-row items-center">
      {onSearch && (
        <MemoizedSearch
          placeholder={'search'}
          onSearch={(query: string) => search(query)}
        />
      )}
      <MemoizedFilter />
      <MemoizedActions />
    </div>
  );
};

export default React.memo(TableActions);

const FilterButton = () => {
  const { filter } = useTableContext();
  const filterLabel = filter?.filterLabel;
  const filterList = filter?.filterList;


  const onFilterSelect = useCallback(
    (items: FilterItem[]) => {
      if (filter?.onFilter) {
        filter.onFilter(items);
      }
    },
    [filter?.onFilter]
  );
  
  if (!filterList || filterList.length === 0) {
    return null;
  }

  return (
    <div className="ml-4">
      <Dropdown
        placeholder={filterLabel ?? ''}
        items={filterList}
        onSelect={(items: FilterItem[]) => onFilterSelect(items)}
        showSelectedItems={true}
        multi={false}
      />
    </div>
  );
};
const MemoizedFilter = React.memo(FilterButton);

const Actions = () => {
  const { actions, onHeaderActionClick, selectedRows } = useTableContext();
  if (!actions || actions.length === 0) {
    return <></>;
  }

  const handleActionClick = (actionLabel: string) => {
    if (onHeaderActionClick) {
      onHeaderActionClick(actionLabel, selectedRows ?? []);
    }
  };

  return (
    <div className="ml-auto flex flex-row justify-between items-center">
      {actions.map((action: Action) => (
        <Button
          key={`action_button_${action.label}`}
          type={'button'}
          onClick={() => handleActionClick(action.label)}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
};
const MemoizedActions = React.memo(Actions);
