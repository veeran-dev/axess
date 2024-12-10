'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FormikErrors } from 'formik';
import { useTableContext } from './tableContext';
import { CellType, rowDataProps, TableCell } from './tableInterface';
import NoData from '../elements/noData';
import RenderCell from './renderCell';
import renderActions from './renderActions';


interface TableBodyProps<T> {
  errors: FormikErrors<T>[];
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<T | undefined>[]>;
}

const TableBody: React.FC<TableBodyProps<rowDataProps | undefined>> = ({errors}:any) => {
  
  const {
    data,
    tableHeaders,
    isCheckbox,
    toggleRowSelection,
    selectedRows,
    onRowActionClick,
  } = useTableContext();
  const [hasAction, setHasAction] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string[]>([]);
  const isSelected = useCallback(
    (id: string) => selectedRows?.includes(id),
    [selectedRows]
  );

  const onClick = useCallback(
    (label: string, id: string) => {
      if (onRowActionClick) {
        onRowActionClick(label, id);
      }
    },
    [onRowActionClick]
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setHasAction(data.some((item) => item.actions && item.actions.length > 0));
    }
  }, [data]);
  
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {data &&
        data.map((row, index) => (
          <tr key={row.id} className="animate-fade-in">
            {isCheckbox && (
              <td className="w-[18px] px-3 py-4" key={`checkbox_${index}`}>
                <div className="flex h-6 items-center">
                  <input
                    id={row.id}
                    type="checkbox"
                    className="h-4 w-4 rounded border-indigo/10 bg-primary/5 text-primary focus:ring-primary focus:ring-offset-gray-900"
                    onChange={() => {
                      if (toggleRowSelection) {
                        toggleRowSelection('Single', row.id);
                      }
                    }}
                    checked={isSelected(row.id)}
                  />
                </div>
              </td>
            )}
            {row.data && Object.keys(row.data)
              .filter(key=>row.data[key].type !== CellType.HIDDEN)
              .map((key: any, subIndex:number) => {
              return (
                <td
                  key={row.id + '_' + subIndex}
                  className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                >
                  <RenderCell
                      index={index}
                      cell={row.data[key] as TableCell}
                      keyName={key}
                      errors={errors}
                      modalData={modalData}
                      setModalData={setModalData}
                  />
                  {/* {renderCell(index, row.data[key] as TableCell, key, errors, modalData, setModalData)} */}
                </td>
              );
            })}
            {hasAction && row.actions && row.actions.length > 0 ? (
              renderActions(row.actions, onClick)
            ) : (
              <></>
            )}
          </tr>
        ))}
      {(data.length <= 0 || data === undefined) && (
        <tr>
          <td colSpan={tableHeaders.length+1}>
            <NoData />
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default React.memo(TableBody);
