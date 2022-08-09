const iconTemplate = ({ componentName, jsx }, { tpl }) => {
  const customName = `TdsIcon${componentName.split("Svg")[1]}`;

  return tpl`
  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-nocheck

  import { css } from 'styled-components/macro';
  import { getIconSizeStyle, IconProps } from '../iconCommon';
  import { createGuid } from "../../../utils/guid";

  export const ${customName} = ({title: titleSource, color, size = 'md', isStandalone = false, ...props}: IconProps): JSX.Element => {
    if (isStandalone && !titleSource) {
      console.warn('You must include a title for a standalone icon to make it accessible. See Storybook documentation for more details.')
    }

    const titleId = createGuid();
    const title = isStandalone ? titleSource : undefined;
    return ${jsx};
  };
    `;
};

// eslint-disable-next-line no-undef
module.exports = iconTemplate;
