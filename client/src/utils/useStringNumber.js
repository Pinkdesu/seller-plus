import { useMemo } from 'react';
import { getStringNumber } from './string';

export const useStringNumber = (number) => {
  return useMemo(() => getStringNumber(number), [number]);
};
