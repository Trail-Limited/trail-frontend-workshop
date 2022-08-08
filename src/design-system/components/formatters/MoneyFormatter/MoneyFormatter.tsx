import NumberFormat, { NumberFormatProps } from 'react-number-format';
import tw from 'twin.macro';

export type MoneyFormatterProps = {
  value: number;
};

export const TdsMoneyFormatter = (props: MoneyFormatterProps) => {
  return (
    <NumberFormat {...props} displayType="text" thousandSeparator prefix="$" />
  );
};
