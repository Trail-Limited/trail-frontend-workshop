import {
  ChangeEvent,
  ChangeEventHandler,
  Ref,
  useEffect,
  useState,
} from 'react';
import { Accept, FileRejection, useDropzone, DropEvent } from 'react-dropzone';
import { css, styled, theme } from 'twin.macro';
import { TdsTypography } from '../../../styles/typography/Typography';
import { TdsIconCloudUpload } from '../../icons/components';
import tw from 'twin.macro';
import { inputFocusStyles } from '../../../styles/focus/inputFocusStyles';
import { TdsLinkButton } from '../../buttons/linkButton/LinkButton';
import { FileItem } from './FileItem';
import { useFocusRing, useHover } from 'react-aria';
import { CommonInputProps } from '../types/commonInputProps';
import { ValidationState } from '@react-types/shared';
import { TdsFileSelection } from '../../files/fileSelection/FileSelection';

type DisplayState = 'selection' | 'selected' | 'error';
type AcceptedFileType = 'word' | 'excel' | 'csv' | 'image' | 'zip';

export const errorMessages = {
  'file-type-error': 'Incorrect file type',
  'upload-error': 'Failed to upload file',
  'selection-error': 'Failed to select file',
};

export type FileInputProps = {
  /**
   * Specify the type of files that the uploader accepts. If left unset, all file types will be allowed.
   *
   * Note: The efficacy of the file validation is limited by browser support,
   * the server should always validate the file independently.
   */
  acceptedFileTypes?: AcceptedFileType[];
  /** Sets the prompt text. */
  promptText?: string;
  /**
   * Test ID applied to the `input` element for component testing.
   *
   * The error screen can be referenced using `{test-id}-error`.
   **/
  testId?: string;
  innerRef?: Ref<HTMLInputElement>;
  value?: File | undefined;
  onChange?: (file: File | undefined) => void;
  validationState?: ValidationState;
} & Pick<CommonInputProps, 'isDisabled' | 'isRequired'>;

type StyledContainerProps = {
  isDragActive: boolean;
  isDisabled: boolean;
  isFocused: boolean;
  displayState: DisplayState;
  isInvalid: boolean;
};

const getBorder = (strokeColor: string, isImportant: boolean = false) => {
  const colorString = strokeColor.split('#')[1];
  return css`
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23${colorString}FF' stroke-width='1' stroke-dasharray='6%2c 4' stroke-dashoffset='4' stroke-linecap='round'/%3e%3c/svg%3e")
      ${isImportant && '!important'};
  `;
};

const StyledContainer = styled.div<StyledContainerProps>`
  ${getBorder(theme`colors.trailgrey.400`)};
  &:hover {
    ${getBorder(theme`colors.trailgrey.500`)};
  }

  ${() => tw`
  flex flex-col justify-center items-center min-w-[20rem] h-40
  text-trailgrey-500 bg-grey-50 rounded p-12
  transition-all outline-none transition-timing-function[ease-in]
  `};
  ${({ displayState }) =>
    displayState === 'selection' &&
    tw`cursor-pointer hover:(bg-trailgrey-50 text-trailgrey-600)`};
  ${({ isDragActive }) =>
    isDragActive &&
    tw`text-trailgrey-600 box-shadow[0px 0px 60px 0px rgba(93, 125, 159, 0.25) inset]`};
  ${({ isDisabled }) =>
    isDisabled &&
    tw`(bg-grey-100 border-grey-300 text-grey-300 cursor-not-allowed)!`};
  ${({ isFocused, displayState }) =>
    displayState === 'selection' && isFocused && inputFocusStyles(false)};
  ${({ isInvalid, isFocused }) =>
    isInvalid && [
      getBorder(theme`colors.orange.500`, true),
      css`
        &:hover {
          ${getBorder(theme`colors.orange.500`, true)};
        }
      `,
      isFocused && inputFocusStyles(true),
    ]};

  ${({ displayState }) =>
    displayState === 'error' && [
      tw`bg-red-50 text-red-600`,
      getBorder(theme`colors.red.400`),
      css`
        &:hover {
          ${getBorder(theme`colors.red.400`, true)}
        }
      `,
    ]};
`;

const StyledUploadIcon = styled(TdsIconCloudUpload)<{
  isDragActive: boolean;
  isHovered: boolean;
}>`
  ${() =>
    tw`w-12 h-12 scale-[85%]
    transition-transform transition-timing-function[ease-in]
    `};
  ${({ isDragActive, isHovered }) =>
    (isHovered || isDragActive) && tw`scale-100`};
`;

const generateAcceptAttributes = (types?: AcceptedFileType[]): Accept => {
  const getAttributesForType = (type: AcceptedFileType) => {
    switch (type) {
      case 'word':
        return {
          'application/msword': ['.doc'],
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            ['.docx'],
        };
      case 'excel':
        return {
          'application/vnd.ms-excel': ['.xls'],
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
            '.xlsx',
          ],
        };
      case 'csv':
        return {
          'text/csv': ['.csv'],
        };
      case 'image':
        return {
          'image/png': ['.png'],
          'image/jpeg': ['.jpg'],
        };
      case 'zip':
        return { 'application/zip': ['.zip'] };
      default:
        return {};
    }
  };

  const acceptAttributes =
    types?.reduce((acc, type) => {
      const attributes = getAttributesForType(type);
      return { ...acc, ...attributes };
    }, {}) ?? {};

  return acceptAttributes;
};

/**
 * > Note: The upload progress percentage is not functional in the stories due to
 * limitations of the mock API setup.
 */
export const TdsFileInput = ({
  isDisabled: disabled = false,
  isRequired = false,
  promptText = 'Drop file or click to browse',
  acceptedFileTypes,
  testId,
  innerRef,
  onChange,
  value,
  validationState,
  ...inputProps
}: FileInputProps) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    onChange?.(selectedFile);
  }, [selectedFile]);

  useEffect(() => {
    setSelectedFile(value);
  }, [value]);

  const getDisplayState = (): DisplayState => {
    if (errorMessage) {
      return 'error';
    } else if (selectedFile) {
      return 'selected';
    } else {
      return 'selection';
    }
  };

  const handleFileSelection = (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => {
    if (acceptedFiles.length > 1) {
      throw new Error('Only single file is supported');
    }

    if (acceptedFiles.length === 1) {
      const selectedFile = acceptedFiles[0];
      setSelectedFile(selectedFile);
    }
  };

  const handleDropRejected = (fileRejections: FileRejection[]) => {
    setErrorMessage(errorMessages['file-type-error']);
  };

  const handleError = (e: Error) => {
    setErrorMessage(errorMessages['selection-error']);
  };

  const handleRetry = () => {
    setErrorMessage(undefined);
  };

  const clearSelection = () => {
    setSelectedFile(undefined);
  };

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: generateAcceptAttributes(acceptedFileTypes),
    disabled,
    maxFiles: 1,
    multiple: false,
    onDrop: handleFileSelection,
    onDropRejected: handleDropRejected,
    onError: handleError,
    noClick: getDisplayState() !== 'selection',
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (getDisplayState() === 'selection' && [' ', 'Enter'].includes(e.key)) {
      e.preventDefault();
      open();
    }
  };

  const { hoverProps, isHovered } = useHover({ isDisabled: disabled });
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledContainer
      {...getRootProps()}
      {...hoverProps}
      {...focusProps}
      isDragActive={isDragActive}
      isDisabled={disabled}
      isFocused={isFocusVisible}
      isInvalid={validationState === 'invalid'}
      displayState={getDisplayState()}
      onKeyDown={handleKeyDown}
      ref={innerRef}
    >
      <input
        data-testid={testId && testId}
        type="file"
        {...getInputProps()}
        {...inputProps}
      />
      {getDisplayState() === 'selection' && (
        <>
          <StyledUploadIcon isHovered={isHovered} isDragActive={isDragActive} />
          <TdsTypography tw="mt-2.5 select-none" variant="button1">
            {promptText}
          </TdsTypography>
        </>
      )}
      {getDisplayState() === 'selected' && (
        <div>
          <TdsFileSelection
            tw="max-w-xs"
            file={selectedFile!}
            onRemove={clearSelection}
            isRemovable
          />
        </div>
      )}
      {getDisplayState() === 'error' && (
        <div data-testid={`${testId}-error`}>
          {errorMessage}, please{' '}
          <TdsLinkButton onPress={handleRetry}>try again</TdsLinkButton>.
        </div>
      )}
    </StyledContainer>
  );
};
