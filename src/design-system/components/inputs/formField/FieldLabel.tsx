import { HTMLAttributes, LabelHTMLAttributes, ReactText } from "react";
import { useVisuallyHidden } from "react-aria";
import { TdsTypography } from "../../../styles/typography/Typography";

type LabelProps = {
  children: ReactText;
  isRequired?: boolean;
  showOptionalHint?: boolean;
  isHidden?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export const TdsLabel = ({
  children,
  isRequired = false,
  showOptionalHint = false,
  isHidden = false,
  ...props
}: LabelProps) => {
  let {
    visuallyHiddenProps,
  }: { visuallyHiddenProps: HTMLAttributes<HTMLElement> | undefined } =
    useVisuallyHidden();

  if (isHidden) {
    visuallyHiddenProps = undefined;
  }
  return (
    <div tw="flex justify-between my-2" {...visuallyHiddenProps}>
      <TdsTypography
        component="span"
        variant="label"
        tw="text-trailgrey-700"
        gutter="disabled"
        {...props}
      >
        {children}
      </TdsTypography>
      {!isRequired && showOptionalHint && (
        <TdsTypography variant="body2" tw="text-text-3">
          Optional
        </TdsTypography>
      )}
    </div>
  );
};
