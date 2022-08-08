import tw from 'twin.macro';
import { TdsCircularLoader } from '../../circularLoader/CircularLoader';
import { TdsTypography } from '../../../styles/typography/Typography';
import { ReactNode } from 'react';
import { TdsTickIcon } from './TickIcon';
import { TdsIconExclamation } from '../../icons/components';
import { TdsButton } from '../../buttons/button/Button';
import { ModalCommonProps, TdsModal } from '../Modal';

export type ModalLoaderStatus = 'loading' | 'success' | 'error';

export type ModalLoaderProps = {
  status?: ModalLoaderStatus;
  loadingMessage?: string;
  successMessage?: string;
  errorMessage?: string;
  SuccessActions?: ReactNode | ((close: () => void) => ReactNode);
  isDismissable?: boolean;
} & ModalCommonProps;

const StyledModalLoader = tw.div`absolute inset-0 flex flex-col items-center pt-[20vh] space-y-4`;

export const TdsModalLoader = ({
  status = 'loading',
  loadingMessage = 'Loading...',
  successMessage = 'Success!',
  errorMessage = 'Failed to load, please try again.',
  SuccessActions,
  isDismissable = false,
  ...modalProps
}: ModalLoaderProps) => {
  const { state } = modalProps;

  let successActions;

  if (SuccessActions instanceof Function) {
    successActions = SuccessActions(state.open);
  } else {
    successActions = SuccessActions;
  }

  return (
    <TdsModal {...modalProps} isKeyboardDismissDisabled={!isDismissable}>
      <StyledModalLoader>
        {status === 'loading' && (
          <>
            <TdsCircularLoader tw="h-28 w-28" />
            <TdsTypography variant="h4" tw="text-white">
              {loadingMessage}
            </TdsTypography>
            {/* Modal requires a focusable element for it to be dismissable */}
            <div tabIndex={0} />
          </>
        )}
        {status === 'success' && (
          <>
            <TdsTickIcon tw="h-28 w-28 p-2" />
            <TdsTypography variant="h4" tw="text-white">
              {successMessage}
            </TdsTypography>
            <div tw="flex space-x-4">
              {successActions}
              <TdsButton variant="green" onPress={state.close}>
                Done
              </TdsButton>
            </div>
          </>
        )}
        {status === 'error' && (
          <>
            <TdsIconExclamation tw="h-28! w-28! p-2 text-red-600" />
            <TdsTypography variant="subtitle1" tw="text-white">
              {errorMessage}
            </TdsTypography>
            <TdsButton tw="w-32" onPress={state.close}>
              Dismiss
            </TdsButton>
          </>
        )}
      </StyledModalLoader>
    </TdsModal>
  );
};
