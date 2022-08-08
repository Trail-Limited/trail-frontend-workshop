import { OverlayTriggerState } from '@react-stately/overlays';
import { ReactNode } from 'react';
import tw from 'twin.macro';
import { TdsTypography } from '../../../styles/typography/Typography';
import { TdsButton } from '../../buttons/button/Button';
import { TdsModal } from '../Modal';

export type ModalPreviewProps = {
  title: string;
  Actions?: ReactNode;
  children: ReactNode;
  isDismissable?: boolean;
  state: OverlayTriggerState;
  testId?: string;
};

const StyledPreviewContainer = tw.div`
w-full h-full flex flex-col
px-5 pb-14
`;

export const TdsModalPreview = ({
  children,
  Actions,
  title,
  isDismissable = false,
  testId,
  state,
}: ModalPreviewProps) => {
  if (!Actions) {
    Actions = (
      <TdsButton variant="trail-grey" onPress={state.close}>
        Close
      </TdsButton>
    );
  }
  return (
    <TdsModal
      state={state}
      isKeyboardDismissDisabled={!isDismissable}
      testId={testId}
    >
      <StyledPreviewContainer>
        {/* Header */}
        <div tw="flex justify-between items-center h-[3.75rem]">
          <TdsTypography variant="h6" tw="text-white">
            {title}
          </TdsTypography>
          {/* Action Buttons */}
          <div tw="flex space-x-3">{Actions}</div>
        </div>
        {/* Preview Content */}
        {children}
      </StyledPreviewContainer>
    </TdsModal>
  );
};
