import { FunctionComponent } from 'react';
import tw, { css, styled } from 'twin.macro';
import { IconProps, IconSizes } from '../../icons/iconCommon';
import { BaseButtonSizes } from '../BaseButton';
import { GhostButtonProps, TdsGhostButton } from '../ghostButton/GhostButton';

type IconButtonProps = {
  ['aria-label']: string;
  /**
   * The icon to be displayed.
   *
   * For example: `<TdsGhostIconButton Icon={TdsIconSupport} .../>`.
   */
  Icon: FunctionComponent<IconProps>;
} & Omit<GhostButtonProps, 'children'>;

const getIconSize = (buttonSize: BaseButtonSizes): IconSizes => {
  switch (buttonSize) {
    case 'xs':
      return 'md';
    case 'sm':
      return 'lg';
    case 'md':
      return 'lg';
  }
};

type StyledGhostIconButtonProps = {
  size: BaseButtonSizes;
};

const getSizingStyles = (size: BaseButtonSizes) => {
  switch (size) {
    case 'xs':
      return tw`p-1`;
    case 'sm':
      return tw`p-[0.3125rem]`;
    case 'md':
      return tw`p-2`;
  }
};

const StyleGhostIconButton = styled(TdsGhostButton)<StyledGhostIconButtonProps>`
  ${({ size }) => getSizingStyles(size)};
`;

export const TdsGhostIconButton = ({
  Icon,
  size = 'md',
  variant = 'trail-grey',
  isDisabled = false,
  ...props
}: IconButtonProps) => {
  return (
    <StyleGhostIconButton
      square={true}
      size={size}
      variant={variant}
      isDisabled={isDisabled}
      title={props['aria-label']}
      {...props}
    >
      <Icon size={getIconSize(size)} />
    </StyleGhostIconButton>
  );
};
