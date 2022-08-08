import { ReactNode, useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import { TdsGhostIconButton } from '../../buttons/ghostIconButton/GhostIconButton';
import { TdsIconClose } from '../../icons/components';
import { useFileDisplay } from '../hooks/useFileDisplay';

type FileSelectionSize = 'sm' | 'md';

export type FileSelectionProps = {
  file: File | File[];
  isRemovable?: boolean;
  size?: FileSelectionSize;
  onOpen?: (file: File) => void;
  onRemove?: () => void;
  /** @ignore */
  className?: string;
};

const StyledFileSelection = styled.div<{
  isRemovable: boolean;
  size: FileSelectionSize;
}>`
  ${() => tw`
flex space-x-1 items-center font-semibold transition-colors
cursor-pointer select-none
border border-trailgrey-400 bg-white text-blue-500 rounded
hover:(border-blue-600 text-blue-600)
active:(border-blue-500 text-blue-700 bg-trailgrey-100)

`};
  ${({ size }) =>
    size === 'md'
      ? tw`py-1 pl-2 pr-3 text-body1 rounded`
      : tw`py-[0.3125rem] px-1 pr-2 text-body2 rounded-sm`};
  ${({ isRemovable, size }) => {
    if (!isRemovable) return;
    return size === 'md' ? tw`pr-2` : tw`pr-1.5`;
  }};
`;

export const TdsFileSelection = ({
  file,
  size = 'md',
  isRemovable = false,
  onRemove,
  onOpen,
  className,
}: FileSelectionProps) => {
  const firstFile = useMemo(
    () => (Array.isArray(file) ? file[0] : file),
    [file]
  );
  const { FileIcon, fileName } = useFileDisplay(firstFile);

  return (
    <StyledFileSelection
      size={size}
      isRemovable={isRemovable}
      className={className}
      onClick={() => onOpen?.(firstFile)}
    >
      <FileIcon size={size} />
      <span tw="leading-none truncate">{fileName}</span>
      {isRemovable && (
        <TdsGhostIconButton
          size="xs"
          aria-label="Remove file"
          variant="red-alt"
          Icon={TdsIconClose}
          onPress={onRemove}
        />
      )}
    </StyledFileSelection>
  );
};
