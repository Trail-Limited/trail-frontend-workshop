import tw from 'twin.macro';
import { TdsLink } from '../../link/Link';
import { useFileDisplay } from '../hooks/useFileDisplay';

export type FileLinkProps = {
  file: File;
  url: string;
};

const StyledLink = tw(TdsLink)`
flex space-x-1 items-center
`;

export const TdsFileLink = ({ file, url }: FileLinkProps) => {
  const { FileIcon, fileName } = useFileDisplay(file);

  return (
    <StyledLink url={url} openInNewWindow>
      <div tw="flex-shrink-0">
        <FileIcon />
      </div>
      <div>{fileName}</div>
    </StyledLink>
  );
};
