import { HTMLAttributes } from 'react';
import { TdsTypography } from '../../../styles/typography/Typography';
import tw from 'twin.macro';

type FieldHintProps = {
  description?: string;
  errorMessage?: string;
  descriptionProps: HTMLAttributes<HTMLElement>;
  errorMessageProps: HTMLAttributes<HTMLElement>;
};

export const TdsFieldHint = ({
  description,
  errorMessage,
  descriptionProps,
  errorMessageProps,
}: FieldHintProps) => {
  if (description || errorMessage) {
    return (
      <div tw="mt-1">
        {description && !errorMessage && (
          <TdsTypography
            component="div"
            variant="caption"
            {...descriptionProps}
          >
            {description}
          </TdsTypography>
        )}
        {errorMessage && (
          <TdsTypography
            component="div"
            variant="caption"
            tw="text-orange-500!"
            {...errorMessageProps}
          >
            {errorMessage}
          </TdsTypography>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};
