import { FunctionComponent } from 'react';
import {
  FileIconProps,
  TdsFileIconCsv,
  TdsFileIconDoc,
  TdsFileIconGeneric,
  TdsFileIconImg,
  TdsFileIconPdf,
  TdsFileIconXls,
  TdsFileIconZip,
} from '../fileIcons/FileIcons';

type FileType = 'generic' | 'pdf' | 'doc' | 'xls' | 'zip' | 'img' | 'csv';

const fileTypeExtensionMap: Record<FileType, string[]> = {
  pdf: ['pdf'],
  doc: ['doc', 'docx'],
  xls: ['xls', 'xlsx'],
  zip: ['zip', 'rar', 'tar'],
  img: ['png', 'jpg', 'tiff'],
  csv: ['csv'],
  generic: [],
};

const getFileTypeByExtension = (ext: string): FileType => {
  for (const [type, exts] of Object.entries(fileTypeExtensionMap)) {
    if (exts.includes(ext)) {
      return type as FileType;
    }
  }

  return 'generic';
};

const getIconByFileType = (
  type: FileType
): FunctionComponent<FileIconProps> => {
  switch (type) {
    case 'doc':
      return TdsFileIconDoc;
    case 'generic':
      return TdsFileIconGeneric;
    case 'img':
      return TdsFileIconImg;
    case 'pdf':
      return TdsFileIconPdf;
    case 'xls':
      return TdsFileIconXls;
    case 'zip':
      return TdsFileIconZip;
    case 'csv':
      return TdsFileIconCsv;
  }
};

export const useFileDisplay = (file: File) => {
  const fileName = file.name;
  const ext = fileName.split('.')[1];
  let FileIcon = getIconByFileType(getFileTypeByExtension(ext));

  return {
    FileIcon,
    fileName,
  };
};
