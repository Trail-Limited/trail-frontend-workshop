import { flexRender, RowData, SortDirection } from '@tanstack/react-table';
import { DOMAttributes, useEffect, useMemo, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import tw, { styled } from 'twin.macro';
import { TdsScrollBars } from '../../scrollBars/ScrollBars';
import { TdsSortIcon } from '../features/sorting/SortIcon';
import {
  CommonTableProps,
  RenderedTableProps,
  spacerColumnId,
  TdsTableBase,
} from '../TableBase';

export type DataTableProps<TableData extends RowData> =
  CommonTableProps<TableData>;

const StyledTable = tw.table`block`;

type StyledHeaderProps = {
  isSorted?: boolean;
  enableSorting?: boolean;
  isResizing?: boolean;
  desc?: boolean;
};

const StyledHeader = styled.th<StyledHeaderProps>`
  ${() => tw`
font-semibold text-body2 text-left
text-trailgrey-600 p-0
relative transition-colors
`};

  ${({ enableSorting }) => enableSorting && tw`cursor-pointer select-none `};
  ${({ enableSorting, isResizing }) =>
    enableSorting && !isResizing && tw`hover:text-blue-500`};
  ${({ isSorted }) =>
    isSorted &&
    tw`
    text-blue-500
    after:(content-[''] absolute bottom-[0.0625rem] -left-0.5 right-0.5 h-0.5 bg-blue-500 rounded-full)`};
`;

const StyledHeaderRow = styled.tr<{ isSticky: boolean }>`
  ${({ isSticky }) => isSticky && tw`sticky top-[-1px] z-tableHeader`};
  ${() => tw`
  bg-grey-50
  after:(content-[''] absolute bottom-0 left-0 right-0 h-[0.0625rem] bg-trailgrey-300)`};
`;

const StyledCell = styled.td<{ isResizable?: boolean }>`
  ${() => tw`
h-10 px-3 leading-none text-body1
whitespace-nowrap
`};

  ${({ isResizable }) =>
    isResizable && tw`max-w-[1px] overflow-ellipsis overflow-hidden`};
`;

const StyledRow = styled.tr`
  ${() => tw`transition-colors duration-75 hover:bg-grey-100`};
`;

type ResizeHandleProps = {
  isResizing?: boolean;
} & DOMAttributes<HTMLDivElement>;

const StyledInnerHandle = styled.div<{ isResizing?: boolean }>`
  ${() => tw`bg-trailgrey-300 w-[1px] h-full m-auto`};
  ${({ isResizing }) => isResizing && tw`bg-trailgrey-500`};
`;

const ResizeHandle = ({ isResizing, ...props }: ResizeHandleProps) => {
  return (
    <div
      {...props}
      tw="absolute right-0 top-0 py-1.5 h-full w-1.5 cursor-[col-resize] select-none touch-action[none]"
    >
      <StyledInnerHandle isResizing={isResizing} />
    </div>
  );
};

const RenderedTable = ({
  table,
  enableManualSorting: enableSorting,
  isLoading,
  isResizable,
  className,
  columnVisibilityState,
}: RenderedTableProps) => {
  const [windowWidth, setWindowWidth] = useState<number>();
  const tableRef = useRef<HTMLTableElement>(null);
  const rows = table.getRowModel().rows;
  const tableBody = useMemo(
    () => (
      <tbody>
        {rows.map((row) => {
          return (
            <StyledRow key={row.id}>
              {row.getVisibleCells().map((cell) => {
                if (cell.column.id === spacerColumnId) {
                  return <td key={cell.id}></td>;
                } else {
                  return (
                    <StyledCell key={cell.id} isResizable={isResizable}>
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
                }
              })}
            </StyledRow>
          );
        })}
      </tbody>
    ),
    // We need to include columnVisibilityState so the table will re-render if
    // the column changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, isResizable, rows, columnVisibilityState]
  );

  // Force spacer to re-calculate width after window resizing.
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleColumns = table.getVisibleLeafColumns();
  // Update the size of the spacer to fill the parent container.
  useEffect(() => {
    const currentSpacerWidth = table.getColumn(spacerColumnId).getSize();
    const dataColumnsWidth = table.getTotalSize() - currentSpacerWidth;

    const widthShortFall =
      (tableRef.current?.parentElement?.clientWidth ?? 0) - dataColumnsWidth;
    const targetSpacerWidth = widthShortFall > 0 ? widthShortFall : 0;

    if (targetSpacerWidth !== currentSpacerWidth) {
      table.setColumnSizing((state) => ({
        ...state,
        [spacerColumnId]: targetSpacerWidth,
      }));
    }
  }, [table, windowWidth, visibleColumns]);

  return (
    <TdsScrollBars tw="w-full h-[inherit] bg-white">
      <StyledTable
        ref={tableRef}
        className={className}
        style={isResizable ? { width: table.getCenterTotalSize() } : undefined}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <StyledHeaderRow isSticky={true} key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  if (header.id === spacerColumnId) {
                    return (
                      <StyledHeader
                        colSpan={1}
                        style={{ width: header.getSize() }}
                        key="spacer"
                      />
                    );
                  } else {
                    return (
                      <StyledHeader
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ width: header.getSize() }}
                        enableSorting={
                          header.column.getCanSort() && enableSorting
                        }
                        isSorted={Boolean(header.column.getIsSorted())}
                        isResizing={header.column.getIsResizing()}
                        onClick={
                          enableSorting
                            ? header.column.getToggleSortingHandler()
                            : undefined
                        }
                      >
                        {header.isPlaceholder ? null : (
                          <div tw="flex items-center gap-2 w-[inherit] p-3">
                            <div tw="truncate">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </div>
                            {{
                              asc: <TdsSortIcon />,
                              desc: <TdsSortIcon isDesc />,
                            }[header.column.getIsSorted() as SortDirection] ??
                              null}
                          </div>
                        )}
                        {isResizable && (
                          <ResizeHandle
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            isResizing={header.column.getIsResizing()}
                          />
                        )}
                      </StyledHeader>
                    );
                  }
                })}
              </StyledHeaderRow>
            );
          })}
        </thead>
        {/* {table.getTotalSize() === 0 && <div>This is empty</div>} */}
        {tableBody}
      </StyledTable>
    </TdsScrollBars>
  );
};

/**
 * The Data Table is build using **TanStack Table**, please see its [documentation](https://tanstack.com/table/v8/docs/guide/introduction)
 * for more information.
 */
export const TdsDataTable = <TableData extends RowData>({
  ...props
}: DataTableProps<TableData>) => {
  return <TdsTableBase {...props} RenderedTable={RenderedTable}></TdsTableBase>;
};

TdsDataTable.Table = RenderedTable;
