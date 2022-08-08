import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  Table,
  OnChangeFn,
  ColumnFiltersState,
  FilterFn,
  getFilteredRowModel,
  ColumnDef,
  RowData,
} from '@tanstack/react-table';

import { ReactElement, useMemo } from 'react';
import { PageControlProps } from './features/pagination/PageControl';
import { PageSizeSelectProps } from './features/pagination/PageSizeSelect';

export const spacerColumnId = '__spacer';

export type PaginationProps = {
  mode?: 'disabled' | 'local' | 'server';
  state?: PaginationState;
  pageCount?: number;
  initialPageSize?: number;
  onPageChange?: OnChangeFn<PaginationState> | undefined;
};

export type SortingProps = {
  state: SortingState;
  mode?: 'disabled' | 'local' | 'server';
  onSortingChange?: OnChangeFn<SortingState> | undefined;
};

export type FilteringProps = {
  columnFilters?: ColumnFiltersState;
  globalFilter?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  globalFilterFn?: FilterFn<any>;
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onGlobalFilterChange?: OnChangeFn<any>;
  mode?: 'disabled' | 'local' | 'server';
};

export type ColumnVisibilityProps = {
  columnVisibilityState?: Record<string, boolean>;
  onColumnVisibilityChange?: OnChangeFn<Record<string, boolean>>;
  updateCurrentStateFromTable?: (state: Record<string, boolean>) => void;
};

export type CommonTableProps<TableData extends RowData> = {
  /**
   * The data for the table to display. This is array should match the type you
   * provided to table.
   *
   * Columns can access this data via string/index ar a functional accessor to return anything they want.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: TableData[] | undefined;
  /**
   * The array of column defs to use for the table.
   *
   * For more details on `ColumnDef`, please see the [documentation](https://tanstack.com/table/v8/docs/api/core/column).
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<any>[];
  /**
   * Display the loading state.
   */
  isLoading?: boolean;
  /** Override the default column definition. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultColumn?: Partial<ColumnDef<any>>;
  /**
   * When a children is provided, it will be called with properties allowing it to render
   * the table along other accessory components such as the pagination controls.
   */
  children?: (
    tableProps: RenderedTableProps,
    pageControlProps: PageControlProps,
    pageSizeSelectProps: PageSizeSelectProps
  ) => ReactElement;
  /**
   * Allows the columns to be resized.
   */
  isResizable?: boolean;
  /** @ignore */
  filtering?: FilteringProps;
  /** @ignore */
  pagination?: PaginationProps;
  /** @ignore */
  sorting?: SortingProps;
  /** @ignore */
  columnVisibility?: ColumnVisibilityProps;
  /** @ignore */
  className?: string;
};

export type BaseTableProps<TableData extends RowData> = {
  RenderedTable: React.FunctionComponent<RenderedTableProps>;
} & CommonTableProps<TableData>;

export type RenderedTableProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: Table<any>;
  enableManualSorting?: boolean;
  className?: string;
  isLoading?: boolean;
  isResizable?: boolean;
  columnVisibilityState?: Record<string, boolean>;
};

export const TdsTableBase = <TableData extends RowData>({
  columns,
  data,
  children,
  className,
  isLoading = false,
  pagination,
  filtering,
  columnVisibility,
  isResizable = false,
  RenderedTable,
  sorting,
  defaultColumn = {
    minSize: 60,
  },
}: BaseTableProps<TableData>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnsWithSpacers = useMemo<ColumnDef<any>[]>(() => {
    return [
      ...columns,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { id: spacerColumnId, minSize: 0 } as ColumnDef<any>,
    ];
  }, [columns]);

  const paginationEnabled = useMemo(() => {
    if (!pagination || pagination.mode === 'disabled') {
      return false;
    }
    return true;
  }, [pagination]);

  const sortingEnabled = useMemo(() => {
    if (!sorting || sorting.mode === 'disabled') {
      return false;
    }
    return true;
  }, [sorting]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderedData = useMemo<TableData[]>(() => {
    if (isLoading) {
      const pageSize = pagination?.initialPageSize ?? 30;

      return Array(pageSize)
        .fill(null)
        .map<TableData>(() => ({} as TableData));
    }

    return data ?? [];
  }, [isLoading, data, pagination?.initialPageSize]);

  const table = useReactTable({
    data: renderedData,
    columns: columnsWithSpacers,
    state: {
      pagination: pagination?.state,
      sorting: sorting?.state,
      columnFilters: filtering?.columnFilters,
      columnVisibility: columnVisibility?.columnVisibilityState,
    },
    defaultColumn,
    columnResizeMode: isResizable ? 'onChange' : undefined,
    enableColumnResizing: isResizable,
    pageCount: pagination?.pageCount,
    onSortingChange: sorting?.onSortingChange,
    onPaginationChange: pagination?.onPageChange,
    onColumnFiltersChange: filtering?.onColumnFiltersChange,
    onGlobalFilterChange: filtering?.onGlobalFilterChange,
    onColumnVisibilityChange: columnVisibility?.onColumnVisibilityChange,
    getFilteredRowModel:
      filtering?.mode === 'local' ? getFilteredRowModel() : undefined, // If only doing manual filtering, you don't need this
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: sortingEnabled ? getSortedRowModel() : undefined,
    getPaginationRowModel:
      pagination?.mode === 'local' ? getPaginationRowModel() : undefined, // If only doing manual pagination, you don't need this
    manualPagination: pagination?.mode === 'server',
    manualFiltering: filtering?.mode === 'server',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as Table<any>; // Typescript doesn't seem to like the original generic typing, so we need to use <any> as a workaround.

  const tableProps: RenderedTableProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: table,
    enableManualSorting: sortingEnabled,
    className,
    isResizable,
    isLoading,
    columnVisibilityState: columnVisibility?.columnVisibilityState,
  };

  // Provide the current column visibility state to the useColumnVisibility hook
  // so it has enough information to update the column visibility state.
  const columnVisibilityState = table
    .getAllLeafColumns()
    .filter((column) => column.id !== spacerColumnId)
    .reduce(
      (acc, column) => ({ ...acc, [column.id]: column.getIsVisible() }),
      {}
    );
  columnVisibility?.updateCurrentStateFromTable?.(columnVisibilityState);

  if (children !== undefined) {
    const pageControlProps: PageControlProps = {
      currentPage: table.getState().pagination?.pageIndex + 1,
      pageCount: table.getPageCount(),
      onNext: table.nextPage,
      onPrevious: table.previousPage,
      isDisabled: !paginationEnabled || isLoading,
    };

    const pageSizeSelectProps: PageSizeSelectProps = {
      currentPageSize: table.getState().pagination.pageSize,
      onChange: (size) => size && table.setPageSize(size),
      isDisabled: !paginationEnabled || isLoading,
    };

    return children(tableProps, pageControlProps, pageSizeSelectProps);
  } else {
    return <RenderedTable {...tableProps} />;
  }
};
