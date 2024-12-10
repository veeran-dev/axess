'use client';

import React, { memo, useCallback, useMemo } from 'react';
import Table from '@/components/table';
import { TableProvider } from '@/components/table/tableContext';
import {
  columnOrderData,
  title,
  tableData,
  actions
} from '@/components/refunds/constants';
// import Loader from '../loader';
import { useRouter } from 'next/router';


const TopRefundsRequests: React.FC= () => {
  const router = useRouter()

  const headerActionClick = useCallback(
    (label: string, selectedRows: string[]) => {
      console.log(`Action clicked in parent: ${label} ${selectedRows}`);
      router.push('/refunds')
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
      initialData: tableData.slice(5),
      columnOrderData,
      checkbox: false,
      onHeaderActionClick: headerActionClick,
      onRowActionClick: rowActionClick,
      isLoading: false,
    };
  }, [
    tableData,
    headerActionClick,
    rowActionClick,
  ]);

  return (
    <TableProvider {...config}>
      <Table />
    </TableProvider>
  );
};

export default memo(TopRefundsRequests);
