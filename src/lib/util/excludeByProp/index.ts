import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';

export const excludeByProp = <T extends any[], U>(
  filters: T,
  prop: keyof U
) => {
  const filterSet = new Set([...filters]);
  return filter((u: U) => !filterSet.has(get(prop)(u)));
};
