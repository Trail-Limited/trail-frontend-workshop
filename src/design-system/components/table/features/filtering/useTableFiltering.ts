import { ColumnFiltersState } from '@tanstack/react-table';
import { useState } from 'react';
import { FilteringProps } from '../../TableBase';

type useTableFilteringProps = {
  mode: 'disabled' | 'local' | 'server';
  initialColumnFilters?: ColumnFiltersState;
};

export const useTableFiltering = ({
  mode = 'local',
  initialColumnFilters,
}: useTableFilteringProps) => {
  const [columnFilters, setColumnFilters] = useState<
    ColumnFiltersState | undefined
  >(initialColumnFilters);

  const getColumnFilterValue = (columnId: string): string =>
    (columnFilters?.find((filter) => filter.id === columnId)
      ?.value as string) ?? '';
  // Always return a default value to force the input to be a controlled component.

  const setColumnFilterValue = (
    columnId: string,
    value: string | undefined | null
  ) => {
    const newColumnFilters = Object.assign<
      ColumnFiltersState,
      ColumnFiltersState
    >([], columnFilters ?? []);

    const matchedFilter = newColumnFilters?.find(
      (filter) => filter.id === columnId
    );

    if (matchedFilter) {
      matchedFilter.value = value;
    } else {
      newColumnFilters.push({ id: columnId, value });
    }

    setColumnFilters(newColumnFilters);
  };

  const resetFilters = () => {
    setColumnFilters([]);
  };

  return {
    resetFilters,
    getColumnFilterValue,
    setColumnFilterValue,
    tableFilteringProps: {
      columnFilters,
      onColumnFiltersChange: setColumnFilters,
      mode,
    } as FilteringProps,
  };
};
