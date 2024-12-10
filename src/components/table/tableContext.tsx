import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { Schema } from "yup";
import { Action, CellType, columnOrder, FilterItem, TableRow } from './tableInterface';
import { transformApiResponseToTableRows } from '@/utils';



interface TableContextType {
  title: string;
  actions?: Action[];
  isCheckbox?: boolean;
  selectedRows?: string[];
  isLoading: boolean;
  data: TableRow[];
  validationSchema?: Schema<any>;
  tableHeaders: columnOrder[];
  filter?: {
    filterLabel?: string;
    filterList?: FilterItem[];
    selectedFilter?: FilterItem[];
    setSelectedFilter?: (items: FilterItem[]) => void;
    onFilter?: (items: FilterItem[]) => void;
  };
  toggleRowSelection?: (type: 'All' | 'None' | 'Single', value: string) => void;
  onHeaderActionClick?: (label: string, selectedRows: string[]) => void;
  onRowActionClick?: (label: string, currentRow: string) => void;
  onSaveQuotation?: (data:any)=>void;
  onSearch?: (query: string) => void;

  setIsCheckbox?: (value: boolean) => void;
}

const TableContext = createContext<TableContextType | undefined>(undefined);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTableContext must be used within a TableProvider');
  }
  return context;
};

export interface TableProviderProps {
  children: ReactNode;
  title: string;
  actions?: Action[];
  initialData: any[];
  validationSchema?: Schema<any>;
  checkbox?: boolean;
  columnOrderData: columnOrder[];
  filterOptions?: {
    filterLabel?: string;
    filterList?: FilterItem[];
    selectedFilter?: FilterItem[];
    setSelectedFilter?: (items: FilterItem[]) => void;
    onFilter?: (items: FilterItem[]) => void;
  };
  onHeaderActionClick?: (label: string, selectedRows: string[]) => void;
  onRowActionClick?: (label: string, currentRow: string) => void;
  onSaveQuotation?: (data:any)=>void;
  onSearch?: (query: string) => void;
  isLoading: boolean
}

export const TableProvider: React.FC<TableProviderProps> = ({
  children,
  title,
  actions,
  initialData,
  validationSchema,
  checkbox,
  columnOrderData,
  filterOptions,
  onHeaderActionClick,
  onRowActionClick,
  onSaveQuotation,
  onSearch,
  isLoading
}) => {

  if(columnOrderData === undefined || columnOrderData.length < 0){
    console.error("columnOrderData is not available");
    columnOrderData = [];
  }
  const transformedData = useMemo(
    () => transformApiResponseToTableRows(initialData, columnOrderData),
    [initialData, columnOrderData]
  );
  
  const initialTableHeaders = useMemo(
    () => {
      const dataHasAction = initialData.some(item => item.actions !== undefined && item.actions.length>0)
      const columnHasAction = columnOrderData.find(th => th.as === 'Action')
      
      if(dataHasAction && !columnHasAction){
        columnOrderData.push({ path: 'Action', type: CellType.TEXT, as: 'Action' },)
      }
      return columnOrderData.filter(x=>x.type !== CellType.HIDDEN)
    },
    [columnOrderData, initialData]
  );

  const [isCheckbox, setIsCheckbox] = useState(checkbox);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  // const [data] = useState<TableRow[]>(transformedData);
  const [tableHeaders] = useState(initialTableHeaders);


  const toggleRowSelection = useCallback(
    (type: 'All' | 'None' | 'Single', value: string) => {
      if (type === 'All') {
        setSelectedRows(transformedData.map((item) => item.id));
      } else if (type === 'None') {
        setSelectedRows([]);
      } else {
        setSelectedRows((prevSelectedRows) =>
          prevSelectedRows.includes(value)
            ? prevSelectedRows.filter((row: string) => row !== value)
            : [...prevSelectedRows, value]
        );
      }
    },
    [transformedData]
  );

  const filter = useMemo(() => {
    if (filterOptions && filterOptions?.filterList !== undefined) {
      const {
        filterLabel,
        filterList,
        selectedFilter,
        setSelectedFilter,
        onFilter,
      } = filterOptions;
      return {
        filterLabel,
        filterList,
        selectedFilter,
        setSelectedFilter,
        onFilter,
      };
    }
    return undefined;
  }, [filterOptions]);

  return (
    <TableContext.Provider
      value={{
        title,
        actions,
        isCheckbox,
        selectedRows,
        data:transformedData,
        validationSchema,
        tableHeaders,
        filter,
        toggleRowSelection,
        setIsCheckbox,
        onHeaderActionClick,
        onRowActionClick,
        onSaveQuotation,
        onSearch,
        isLoading
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
