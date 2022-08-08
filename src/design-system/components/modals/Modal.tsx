import {
  OverlayTriggerState,
  useOverlayTriggerState,
} from '@react-stately/overlays';
import { is } from 'date-fns/locale';
import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  FocusScope,
  OverlayContainer,
  useModal,
  useOverlay,
  usePreventScroll,
} from 'react-aria';
import tw from 'twin.macro';
import { BaseStyleContainer } from '../../styles/tailwind/baseStyles';
import { TdsSimpleTransition } from '../transition/SimpleTransition';

type ModalProps = {
  /**
   * Whether to close the overlay when the user interacts outside it.
   */
  isDismissable?: boolean;
  /**
   * Whether pressing the escape key to close the overlay should be disabled.
   */
  isKeyboardDismissDisabled?: boolean;
  children: ReactNode;
} & ModalCommonProps;

export type ModalCommonProps = {
  state: OverlayTriggerState;
  testId?: string;
};

type ModalContainerProps = {
  isOpen?: boolean;
  onClose?: () => void;
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  children: ReactNode;
};

const StyledModalUnderlay = tw.div`
fixed z-modal inset-0
bg-grey-900 bg-opacity-95
`;

const ModalContainer = ({
  children,
  ...useOverlayProps
}: ModalContainerProps) => {
  const [preventScroll, setPreventScroll] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    // The fade in animation will not work when prevent scroll is active.
    // This workaround will add a small delay to activate prevent scroll.
    setPreventScroll(true);
    return setPreventScroll(false);
  });

  // Hide content outside the modal from screen readers.
  const { modalProps } = useModal();
  const { overlayProps, underlayProps } = useOverlay(
    useOverlayProps,
    overlayRef
  );

  usePreventScroll({ isDisabled: !preventScroll });

  return (
    <BaseStyleContainer>
      <StyledModalUnderlay {...underlayProps}>
        <FocusScope autoFocus contain restoreFocus>
          <div
            tw="w-full h-full"
            {...modalProps}
            {...overlayProps}
            ref={overlayRef}
            tabIndex={-1}
          >
            {children}
          </div>
        </FocusScope>
      </StyledModalUnderlay>
    </BaseStyleContainer>
  );
};

export const TdsModal = ({
  state,
  testId,
  isDismissable = false,
  isKeyboardDismissDisabled = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <>
      <OverlayContainer>
        <TdsSimpleTransition show={state.isOpen} data-testid={testId}>
          <ModalContainer
            {...props}
            isOpen={state.isOpen}
            onClose={state.close}
            isDismissable={isDismissable}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          >
            {children}
          </ModalContainer>
        </TdsSimpleTransition>
      </OverlayContainer>
    </>
  );
};
