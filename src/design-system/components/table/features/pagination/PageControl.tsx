import tw from 'twin.macro';
import { TdsTypography } from '../../../../styles/typography/Typography';
import { TdsIconButton } from '../../../buttons/iconButton/IconButton';
import { TdsIconArrowLeft, TdsIconArrowRight } from '../../../icons/components';

type Size = 'sm' | 'md';

export type PageControlProps = {
  size?: Size;
  currentPage: number;
  pageCount: number | undefined;
  onPrevious: () => void;
  onNext: () => void;
  isDisabled?: boolean;
};

const StyledPageControl = tw.div`flex space-x-2.5 items-center`;

export const TdsPageControl = ({
  size = 'md',
  isDisabled = false,
  currentPage,
  pageCount,
  onPrevious,
  onNext,
}: PageControlProps) => {
  return (
    <StyledPageControl>
      <TdsIconButton
        aria-label="Previous"
        Icon={TdsIconArrowLeft}
        onPress={() => onPrevious()}
        size={size}
        isDisabled={isDisabled || currentPage === 1}
      />
      <TdsTypography
        aria-label={`Page ${currentPage} of ${pageCount ?? 'undefined'}`}
        tw="select-none"
      >
        <strong tw="inline-block before:(block content-['3'] font-bold h-0.5 text-transparent overflow-hidden invisible)">
          {currentPage}
        </strong>
        <span> / </span>
        <span>{pageCount ?? '-'}</span>
      </TdsTypography>

      <TdsIconButton
        aria-label="Next"
        Icon={TdsIconArrowRight}
        onPress={() => onNext()}
        size={size}
        isDisabled={isDisabled || currentPage === pageCount}
      />
    </StyledPageControl>
  );
};
