'use client';

import React, { memo, useCallback, useMemo } from 'react';
import Table from '@/components/table';
import Pagination from '@/components/table/pagination';
import { TableProvider } from '@/components/table/tableContext';
import withPagination from '@/lib/withPagination';
import { ticketColumnOrderData, ticketData, title } from '@/components/tickets/constants';
import withAdminLayout from '@/lib/withAdminLayout';


const Tickets: React.FC= () => {

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


  const config = useMemo(() => {

    return {
      title,
      initialData: ticketData as any,
      columnOrderData:ticketColumnOrderData,
      checkbox: false,
      onSearch: handleSearch,
      onHeaderActionClick: headerActionClick,
      onRowActionClick: rowActionClick,
      isLoading: false,
    };
  }, [
    ticketData,
    headerActionClick,
    rowActionClick,
    handleSearch
  ]);

  return (
    <TableProvider {...config}>
      <Table />
      <Pagination/>
    </TableProvider>
  );
};

export default memo(withAdminLayout(withPagination(Tickets)));
