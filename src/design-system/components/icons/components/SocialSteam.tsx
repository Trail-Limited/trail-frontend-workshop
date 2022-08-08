//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { css } from 'styled-components';
import { getIconSizeStyle, IconProps } from '../iconCommon';
import { createGuid } from '../../../utils/guid';
export const TdsIconSocialSteam = ({
  title: titleSource,
  color,
  size = 'md',
  isStandalone = false,
  ...props
}: IconProps): JSX.Element => {
  if (isStandalone && !titleSource) {
    console.warn(
      'You must include a title for a standalone icon to make it accessible. See Storybook documentation for more details.'
    );
  }

  const titleId = createGuid();
  const title = isStandalone ? titleSource : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      css={css`
        ${getIconSizeStyle(size)};
      `}
      aria-hidden={!isStandalone}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M760 40c54 0 128 30 163 65l30 30c37 39 60 104 64 160v37c-8 116-89 204-183 236-54 19-71 8-87 20L547 735c-9 7-12 8-17 12-14 113-113 176-211 176-71 0-140-33-177-104-13-25-14-34-19-46l-99-40c-8-3-18-9-20-21l-2-12V487c1-21 13-32 29-32 4 0 8 1 13 2 61 25 123 48 183 74l16-7c33-14 52-16 88-16 5-7 12-17 16-23l89-127c7-9 31-43 39-57 6-89 34-135 89-191 43-41 119-70 196-70zM326 552c-34 0-44 4-84 21-5 2-10 3-14 3-12 0-24-7-34-11-49-20-99-40-148-60v189l99 40c25 12 19 34 36 65 28 55 83 80 139 80 76 0 152-47 165-132l2-11c3-19 16-24 33-37l201-147c29-21 53-10 99-26 78-27 146-100 153-197v-32c-3-45-23-97-52-131l-29-29c-35-32-93-53-150-53-30 0-61 6-88 19-85 42-131 110-139 216-6 11-38 57-44 65l-88 126c-15 16-15 39-40 42h-17zm-9 283c-22 0-45-11-58-20-11-8-33-26-37-40 24 6 57 29 94 29 20 0 42-8 64-28 19-18 29-44 29-70-4-64-50-91-104-106 2-3 1-4 6-4h11c73 0 121 57 121 119 0 60-42 120-126 120zm303-530c0-73 59-133 132-133s133 60 133 133-60 132-133 132-132-59-132-132zm44 0c0 49 39 88 88 88s89-39 89-88-40-89-89-89-88 40-88 89z"
      />
    </svg>
  );
};