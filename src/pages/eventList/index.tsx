'use client';

import React, { memo, useCallback, useMemo } from 'react';
import Table from '@/components/table';
import Pagination from '@/components/table/pagination';
import { TableProvider } from '@/components/table/tableContext';
import { useRouter } from 'next/router';
import withPagination from '@/lib/withPagination';
import withAdminLayout from '@/lib/withAdminLayout';
import { actions, eventColumnOrderData, eventTableData, title } from '@/components/events/constant';


const EventList: React.FC= () => {
  const router = useRouter()

  const handleSearch = useCallback((term:string)=>{
    console.log("onSearch....",term)
  },[])

  const headerActionClick = useCallback(
    (label: string, selectedRows: string[]) => {
      console.log(`Action clicked in parent: ${label} ${selectedRows}`);
      if(label === 'Create Event'){
        router.push(`/events/create`)
      }
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
      actions,
      initialData: eventTableData as any,
      columnOrderData:eventColumnOrderData,
      checkbox: false,
      onSearch: handleSearch,
      onHeaderActionClick: headerActionClick,
      onRowActionClick: rowActionClick,
      isLoading: false,
    };
  }, [
    eventTableData,
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

export default memo(withAdminLayout(withPagination(EventList)));
