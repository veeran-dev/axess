'use client';

import React, { memo, useCallback, useMemo } from 'react';
import Table from '@/components/table';
import Pagination from '@/components/table/pagination';
import { TableProvider } from '@/components/table/tableContext';

import { useRouter } from 'next/router';
import { FilterItem } from '../Dropdown';
import withPagination from '@/lib/withPagination';
import { actions, columnOrderData, couponData, CouponStatuses, title } from './constant';


const RefundsRequests: React.FC= () => {
  const router = useRouter()

  const handleSearch = useCallback((term:string)=>{
    console.log("onSearch....",term)
  },[])

  const headerActionClick = useCallback(
    (label: string, selectedRows: string[]) => {
      console.log(`Action clicked in parent: ${label} ${selectedRows}`);
      router.push(`/coupons/create`)
    },
    []
  );

  const rowActionClick = useCallback((label: string, currentRow: string) => {
    console.log(`Action clicked in parent: ${label}`);
    console.log('Selected row...', currentRow);
  }, []);

  const filterOptions = {
    filterList: CouponStatuses,
    filterLabel: 'Status',
    onFilter: (x:FilterItem[])=>console.log(x)
  }

  const config = useMemo(() => {

    return {
      title,
      actions,
      filterOptions,
      initialData: couponData as any,
      columnOrderData,
      checkbox: false,
      onSearch: handleSearch,
      onHeaderActionClick: headerActionClick,
      onRowActionClick: rowActionClick,
      isLoading: false,
    };
  }, [
    couponData,
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
