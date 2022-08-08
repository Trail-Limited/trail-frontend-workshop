import { SortingState } from '@tanstack/react-table';
import { useState } from 'react';
import { SortingProps } from '../../TableBase';

export const useTableSorting = (
  initialSort: SortingState = [],
  mode?: 'disabled' | 'local' | 'server'
) => {
  const [sortState, setSortState] = useState(initialSort);

  return {
    tableSortingProps: {
      state: sortState,
      onSortingChange: setSortState,
      mode,
    } as SortingProps,
  };
};
