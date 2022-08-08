import { Options, SingleValue } from 'react-select';
import { BaseOption, TdsSelectInput } from '../../../inputs/select/SelectInput';

export const defaultPageSizes: number[] = [10, 20, 30, 40, 50];

export type PageSizeSelectProps = {
  currentPageSize: number;
  pageSizes?: number[];
  onChange: (size: SingleValue<number> | undefined) => void;
  defaultSize?: number;
  isDisabled?: boolean;
};

export const TdsPageSizeSelect = ({
  onChange,
  pageSizes = defaultPageSizes,
  currentPageSize,
  isDisabled,
}: PageSizeSelectProps) => {
  const getOptions = (sizes: number[]): Options<BaseOption<number>> =>
    sizes.map((size) => ({
      label: size.toString(),
      value: size,
    }));
  return (
    <TdsSelectInput
      aria-label="Select page size"
      value={currentPageSize}
      options={getOptions(pageSizes)}
      onChange={onChange}
      isDisabled={isDisabled}
    />
  );
};
