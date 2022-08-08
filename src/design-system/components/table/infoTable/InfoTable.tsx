import { flexRender, RowData } from '@tanstack/react-table';
import Skeleton from 'react-loading-skeleton';
import tw, { styled } from 'twin.macro';
import { TdsScrollBars } from '../../scrollBars/ScrollBars';
import {
  CommonTableProps,
  RenderedTableProps,
  TdsTableBase,
} from '../TableBase';

export type InfoTableProps<TableData extends RowData> = Omit<
  CommonTableProps<TableData>,
  'isResizable'
>;

const StyledTable = tw.table`block`;

const StyledHeader = tw.th`
font-heading font-medium text-body1 text-left
text-trailgrey-600 bg-white whitespace-nowrap
py-2 px-4
`;

const StyledHeaderRow = styled.tr<{ isSticky: boolean }>`
  ${({ isSticky }) => isSticky && tw`sticky top-0 z-tableHeader`};
`;

const StyledCell = tw.td`h-9 px-4 whitespace-nowrap`;

const StyledRow = styled.tr<{ alternativeRowColor: boolean }>`
  ${({ alternativeRowColor }) =>
    alternativeRowColor && tw`odd:bg-grey-50 even:bg-white`};
  ${() => tw`transition-colors duration-75 hover:bg-grey-100`};
`;

const RenderedTable = ({
  table,
  enableManualSorting: enableSorting,
  isLoading,
  className,
}: RenderedTableProps) => {
  return (
    <TdsScrollBars tw=" w-full h-[inherit] bg-white">
      <StyledTable className={className}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <StyledHeaderRow isSticky={true} key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <StyledHeader
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        onClick={
                          enableSorting
                            ? header.column.getToggleSortingHandler()
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </StyledHeader>
                );
              })}
            </StyledHeaderRow>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <StyledRow alternativeRowColor={true} key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <StyledCell key={cell.id}>
                      {isLoading ? (
                        <Skeleton width="100%" />
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </StyledCell>
                  );
                })}
              </StyledRow>
            );
          })}
        </tbody>
      </StyledTable>
    </TdsScrollBars>
  );
};

/**
 * The Info Table is build using **TanStack Table**, please see its [documentation](https://tanstack.com/table/v8/docs/guide/introduction)
 * for more information.
 */
export const TdsInfoTable = <TableData extends RowData>({
  ...props
}: InfoTableProps<TableData>) => {
  return <TdsTableBase {...props} RenderedTable={RenderedTable}></TdsTableBase>;
};

TdsInfoTable.Table = RenderedTable;
