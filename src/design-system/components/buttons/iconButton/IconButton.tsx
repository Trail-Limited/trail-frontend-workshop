import { FunctionComponent } from 'react';
import { IconProps, IconSizes } from '../../icons/iconCommon';
import { ButtonProps, ButtonSizes, TdsButton } from '../button/Button';

type GhostIconButtonProps = {
  'aria-label': string;
  /**
   * The icon to be displayed.
   *
   * For example: `<TdsIconButton Icon={TdsIconSupport} .../>`.
   */
  Icon: FunctionComponent<IconProps>;
} & Omit<ButtonProps, 'children'>;

const getIconSize = (buttonSize: ButtonSizes): IconSizes => {
  switch (buttonSize) {
    case 'sm':
      return 'xs';
    case 'md':
      return 'sm';
  }
};

export const TdsIconButton = ({
  Icon,
  size = 'md',
  variant = 'trail-grey',
  isDisabled = false,
  ...props
}: GhostIconButtonProps) => {
  return (
    <TdsButton
      square={true}
      size={size}
      variant={variant}
      isDisabled={isDisabled}
      title={props['aria-label']}
      {...props}
    >
      <Icon size={getIconSize(size)} />
    </TdsButton>
  );
};
