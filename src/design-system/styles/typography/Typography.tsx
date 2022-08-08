import { ReactNode, ReactText } from 'react';
import tw, { css, styled, TwStyle } from 'twin.macro';

type TypeVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'subtitle1'
  | 'subtitle2'
  | 'label'
  | 'body1'
  | 'body2'
  | 'button1'
  | 'button2'
  | 'caption';

type TypeComponent =
  | 'auto'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'label'
  | 'code'
  | 'span';

type GutterConfig = 'full' | 'disabled' | 'top-only' | 'bottom-only';

type TypographyProps = {
  /** The typeset style to be applied. */
  variant?: TypeVariant;
  /**
   * Overrides the component type of the text element.
   *
   * By default, a sensible component is rendered according to the variant
   * selected.
   *
   * For example, `<Typography variant="h1">Heading 1<Typography>` will be rendered as
   * `<h1>Heading 1</h1>` by default.
   *
   * If you want to render the text as a different element, you can use the `component`
   * prop to do so.
   */
  component?: TypeComponent;
  /**
   * Determines the top and bottom margins of the text.
   */
  gutter?: GutterConfig;
  /**
   * Label for assistive technologies
   */
  ['aria-label']?: string;
  /** The text content. */
  children: ReactNode;
  /** @ignore Allows component to be styled. */
  className?: string;
};

type StyledTextProps = {
  variant: TypeVariant;
  gutterConfig: GutterConfig;
};

/** Provides the default component for variants. */
const componentMapping: { [Variant in TypeVariant]: TypeComponent } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h6',
  subtitle1: 'div',
  subtitle2: 'div',
  label: 'label',
  body1: 'span',
  body2: 'span',
  button1: 'span',
  button2: 'span',
  caption: 'span',
};

const gutters: { [Variant in TypeVariant]: { top: TwStyle; bottom: TwStyle } } =
  {
    h1: {
      top: tw`mt-6`,
      bottom: tw`mb-4`,
    },
    h2: {
      top: tw`mt-5`,
      bottom: tw`mb-3`,
    },
    h3: {
      top: tw`mt-4`,
      bottom: tw`mb-3`,
    },
    h4: {
      top: tw`mt-3`,
      bottom: tw`mb-3`,
    },
    h5: {
      top: tw`mt-2`,
      bottom: tw`mb-2`,
    },
    h6: {
      top: tw`mt-2`,
      bottom: tw`mb-2`,
    },
    h7: {
      top: tw`mt-1.5`,
      bottom: tw`mb-1.5`,
    },
    subtitle1: {
      top: tw`mt-1.5`,
      bottom: tw`mb-1.5`,
    },
    subtitle2: {
      top: tw`mt-1.5`,
      bottom: tw`mb-1.5`,
    },
    label: {
      top: tw`mt-2`,
      bottom: tw`mb-2`,
    },
    body1: {
      top: tw``,
      bottom: tw``,
    },
    body2: {
      top: tw``,
      bottom: tw``,
    },
    button1: {
      top: tw``,
      bottom: tw``,
    },
    button2: {
      top: tw``,
      bottom: tw``,
    },
    caption: {
      top: tw``,
      bottom: tw``,
    },
  };

const typeStyle = (variant: TypeVariant) => {
  switch (variant) {
    case 'h1':
      return tw`font-heading font-semibold text-h1`;
    case 'h2':
      return tw`font-heading font-semibold text-h2`;
    case 'h3':
      return tw`font-heading font-semibold text-h3`;
    case 'h4':
      return tw`font-heading font-semibold text-h4`;
    case 'h5':
      return tw`font-heading font-semibold text-h5`;
    case 'h6':
      return tw`font-heading font-semibold text-h6`;
    case 'h7':
      return tw`font-heading font-semibold text-h7`;
    case 'subtitle1':
      return tw`text-subtitle1 font-semibold`;
    case 'subtitle2':
      return tw`text-subtitle2 font-semibold`;
    case 'label':
      return tw`text-label font-semibold`;
    case 'body1':
      return tw`text-body1 leading-normal`;
    case 'body2':
      return tw`text-body2`;
    case 'button1':
      return tw`text-button1 font-bold leading-none`;
    case 'button2':
      return tw`text-button2 font-bold leading-none`;
    case 'caption':
      return tw`text-caption`;
  }
};

const gutterStyle = (variant: TypeVariant, gutterConfig: GutterConfig) => {
  const config = gutters[variant];

  switch (gutterConfig) {
    case 'disabled':
      return;
    case 'full':
      return css`
        ${() => config.top};
        ${() => config.bottom};
      `;
    case 'top-only':
      return config.top;
    case 'bottom-only':
      return config.bottom;
  }
};

const StyledText = styled.div<StyledTextProps>`
  ${({ variant }) => typeStyle(variant)};
  ${({ variant, gutterConfig }) => gutterStyle(variant, gutterConfig)};
`;

export const TdsTypography = ({
  variant = 'body1',
  gutter = 'full',
  component = 'auto',
  children,
  ...props
}: TypographyProps) => {
  if (!component || component === 'auto') {
    component = componentMapping[variant];
  }

  return (
    <StyledText
      {...props}
      gutterConfig={gutter}
      variant={variant}
      as={component}
    >
      {children}
    </StyledText>
  );
};
