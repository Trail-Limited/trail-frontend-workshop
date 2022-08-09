import { useState } from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import styled from 'styled-components/macro';
import * as icons from './components';
import { IconProps } from './iconCommon';
import { BaseStyleContainer } from '../../styles/tailwind/baseStyles';
import { TdsTextInput } from '../inputs/text/textInput/TextInput';

type Icon = (props: IconProps) => JSX.Element;

type GalleryItemProps = {
  icon: Icon;
  title: string;
};

const getCopyText = (iconName: string) => {
  return `<${iconName} />`;
};

const copyText = (iconName: string) => {
  const text: string = getCopyText(iconName);
  navigator.clipboard.writeText(text);
};

const getShortName = (iconName: string) => {
  return iconName.split('TdsIcon')[1];
};

const generateGalleryItems = (filter: string) => {
  const items = Object.entries<Icon>(icons)
    .filter(([title]) => title.toLowerCase().includes(filter.toLowerCase()))
    .map(([title, icon]) => {
      return <GalleryItem key={title} title={title} icon={icon} />;
    });

  return items;
};

const StyledGalleryItem = styled.div`
  ${tw`
flex justify-center items-center flex-col gap-2
border-grey-300 border rounded-sm p-3 relative
cursor-pointer select-none text-grey-900
`};
`;

const StyledHoverDisplay = styled.div`
  ${tw`
    flex justify-center items-center flex-col
    absolute inset-0 text-center p-2
    opacity-0 rounded-sm bg-black
    pointer-events-none text-white
    transition-all duration-75
  `};

  code {
    ${tw`text-subtitle1 break-all text-white`};
  }

  ${StyledGalleryItem}:hover & {
    opacity: 1;
  }
`;

const SearchInput = ({
  onChange,
}: {
  onChange: (value: string | number | undefined) => void;
}) => {
  return (
    <TdsTextInput
      onChange={onChange}
      aria-label="Search icons"
      placeholder="Search icons"
      charWidth={40}
      tw="mb-8 max-w-[80vw]"
    />
  );
};

const StyledGallery = tw.div`
    grid grid-template-columns[repeat(auto-fit, minmax(186px, 1fr))] gap-5
    justify-center width[100%]
`;

const GalleryItem = ({ icon, title }: GalleryItemProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (!copied) {
      window.setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
    setCopied(true);
    copyText(title);
  };

  return (
    <StyledGalleryItem onClick={handleClick}>
      {icon({
        title,
        isStandalone: true,
      })}
      <div tw="text-body1">{getShortName(title)}</div>
      <StyledHoverDisplay>
        {copied ? (
          'Copied!'
        ) : (
          <>
            Copy
            <br />
            <code>{getCopyText(title)}</code>
          </>
        )}
      </StyledHoverDisplay>
    </StyledGalleryItem>
  );
};

export const IconsGallery = (): JSX.Element => {
  const [filter, setFilter] = useState('');

  const handleChange = (value: string | number | undefined) => {
    setFilter(value as string);
  };

  return (
    <BaseStyleContainer>
      <GlobalStyles />
      <div tw="flex flex-col items-center max-w-screen-xl m-auto pt-10">
        <SearchInput onChange={handleChange} />
        <StyledGallery>{generateGalleryItems(filter)}</StyledGallery>
      </div>
    </BaseStyleContainer>
  );
};
