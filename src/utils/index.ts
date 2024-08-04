//@ts-nocheck
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AxiosError } from 'axios';

/***
 * Use these to merge classNames together and define conditional classnames
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const parseError = (err: AxiosError): string => {
  if (err?.response?.data?.error) {
    if (typeof err.response.data.error === 'string') {
      return err.response.data.error;
    }
    if (err.response.data.error.message) {
      return err.response.data.error.message;
    }
  }
  if (err?.response?.data?.message) {
    return err.response.data.message;
  } else if (err?.response?.data?.status) {
    return err.response.data.status;
  } else if (err?.message) {
    return err.message;
  } else {
    return 'Error Occured';
  }
};

export default parseError;
