'use client';

import React, { memo, useCallback, useMemo } from 'react';
import Table from '@/components/table';
import Pagination from '@/components/table/pagination';
import { TableProvider } from '@/components/table/tableContext';
import {
  columnOrderData,
  title,
  tableData,
} from '@/components/refunds/constants';
// import { useRouter } from 'next/router';
import { refundStatuses } from './constants';
import { FilterItem } from '../Dropdown';
import withPagination from '@/lib/withPagination';


const RefundsRequests: React.FC= () => {
  // const router = useRouter()

  const handleSearch = useCallback((term:string)=>{
    console.log("onSearch....",term)
  },[])

  const headerActionClick = useCallback(
    (label: string, selectedRows: string[]) => {
      console.log(`Action clicked in parent: ${label} ${selectedRows}`);
    },
    []
  );

  const rowActionClick = useCallback((label: string, currentRow: string) => {
    console.log(`Action clicked in parent: ${label}`);
    console.log('Selected row...', currentRow);
  }, []);

  const filterOptions = {
    filterList: refundStatuses,
    filterLabel: 'Status',
    onFilter: (x:FilterItem[])=>console.log(x)
  }

  const config = useMemo(() => {

    return {
      title,
      filterOptions,
      initialData: tableData as any,
      columnOrderData,
      checkbox: false,
      onSearch: handleSearch,
      onHeaderActionClick: headerActionClick,
      onRowActionClick: rowActionClick,
      isLoading: false,
    };
  }, [
    tableData,
    filterOptions,
    headerActionClick,
    rowActionClick,
  ]);

  return (
    <TableProvider {...config}>
      <Table />
      <Pagination/>
    </TableProvider>
  );
};

export default memo(withPagination(RefundsRequests));
