import { PaginationState } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { PaginationProps } from '../../TableBase';

type UseTablePaginationProps = {
  mode?: 'disabled' | 'local' | 'server';
  pageCount?: number;
  initialPageSize?: number;
  initialPageIndex?: number;
};

export const useTablePagination = ({
  mode,
  pageCount,
  initialPageIndex = 0,
  initialPageSize = 20,
}: UseTablePaginationProps) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: initialPageIndex,
    pageSize: initialPageSize,
  });

  const paginationState = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  return {
    fetchDataOptions: {
      pageIndex,
      pageSize,
    },
    tablePaginationProps: {
      mode,
      pageCount,
      initialPageSize,
      state: paginationState,
      onPageChange: setPagination,
    } as PaginationProps,
  };
};
