import tw from 'twin.macro';
import { TdsGhostIconButton } from '../../buttons/ghostIconButton/GhostIconButton';
import { useFileDisplay } from '../../files/hooks/useFileDisplay';
import { TdsIconClose } from '../../icons/components';

type FileType = 'generic' | 'pdf' | 'doc' | 'xls' | 'zip' | 'img';

type FileItemProps = {
  file: File;
  url?: string;
  onRemove?: () => void;
  className?: string;
};

const StyledFileItem = tw.div`
  flex space-x-2 py-1 px-3 pr-1 items-center w-full
  border border-trailgrey-400 bg-white text-trailgrey-800 rounded
`;

export const FileItem = ({ file, url, onRemove, className }: FileItemProps) => {
  const { FileIcon, fileName } = useFileDisplay(file);

  return (
    <StyledFileItem className={className}>
      <FileIcon size="md" />
      {url && (
        <a
          tw="cursor-pointer hover:underline truncate"
          href={url}
          target="_blank"
        >
          {fileName}
        </a>
      )}
      {!url && (
        <span tw="text-text-1 font-semibold leading-none truncate">
          {fileName}
        </span>
      )}
      <TdsGhostIconButton
        size="xs"
        aria-label="Remove file"
        variant="red-alt"
        Icon={TdsIconClose}
        onPress={onRemove}
      />
    </StyledFileItem>
  );
};
