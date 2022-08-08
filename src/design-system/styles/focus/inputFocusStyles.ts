import { CSSObject } from 'styled-components';
import tw from 'twin.macro';

export const inputFocusStyles = (isInvalid: boolean): CSSObject => {
  return isInvalid
    ? {
        ...tw`border-orange-500 shadow-md`,
        ['--tw-shadow']: '0px 0px 8px 0px rgba(250, 119, 24, 0.75) !important',
      }
    : {
        ...tw`border-blue-500 shadow-md`,
        ['--tw-shadow']: '0px 0px 8px 0px rgba(46, 178, 252, 0.75) !important',
      };
};
