import { OverlayTriggerProps } from '@react-types/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { ModalCommonProps } from '../Modal';

export const useModalControl = (props: OverlayTriggerProps = {}) => {
  const state = useOverlayTriggerState(props);

  return {
    isOpen: state.isOpen,
    open: state.open,
    close: state.close,
    modalProps: {
      state,
    } as ModalCommonProps,
  };
};
