import { Row, RowData } from '@tanstack/react-table';

export const sortTableByDate = (
  rowA: Row<any>,
  rowB: Row<any>,
  columnId: string
) => {
  const dateA = new Date(rowA.getValue(columnId));
  const dateB = new Date(rowB.getValue(columnId));
  return dateA.getTime() - dateB.getTime();
};
