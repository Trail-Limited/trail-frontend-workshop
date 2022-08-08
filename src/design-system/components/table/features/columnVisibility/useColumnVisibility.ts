import { useCallback, useMemo, useState } from 'react';
import { ColumnVisibilityProps } from '../../TableBase';

export const useColumnVisibility = (
  init?: Record<string, boolean> | readonly string[]
) => {
  let currentTableState: Record<string, boolean> = useMemo(
    () => ({} as Record<string, boolean>),
    []
  );

  const generateColumnVisibilityState = useCallback(
    (config?: Record<string, boolean> | readonly string[]) => {
      if (Array.isArray(config)) {
        const columnVisibilityState = Object.entries(currentTableState).reduce(
          (acc, column) => {
            const columnKey = column[0];
            const columnVisibility = config.includes(columnKey) ? true : false;
            return { ...acc, [columnKey]: columnVisibility };
          },
          {}
        );
        const isEmpty = Object.keys(columnVisibilityState).length === 0;
        return isEmpty ? undefined : columnVisibilityState;
      } else {
        return config;
      }
    },
    [currentTableState]
  );

  const [columnVisibility, setColumnVisibility] = useState(
    generateColumnVisibilityState(init)
  );

  const updateColumnVisibility = useCallback(
    (config: Record<string, boolean> | readonly string[]) => {
      const state = generateColumnVisibilityState(config);
      setColumnVisibility(state);
    },
    [generateColumnVisibilityState]
  );

  return {
    updateColumnVisibility,
    columnVisibilityProps: {
      columnVisibilityState: columnVisibility,
      onColumnVisibilityChange: setColumnVisibility,
      updateCurrentStateFromTable(state) {
        currentTableState = state;
      },
    } as ColumnVisibilityProps,
  };
};
