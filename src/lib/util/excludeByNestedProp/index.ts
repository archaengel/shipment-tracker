import { ElementOf } from '../../types';
import filter from 'lodash/fp/filter';
import reduce from 'lodash/fp/reduce';
import get from 'lodash/fp/get';

export const excludeByNestedProp = <
  T extends any[],
  U,
  K extends ElementOf<U[keyof U]>
>(
  filters: T,
  arrayProp: keyof U,
  prop: keyof K
) => {
  const filterSet = new Set([...filters]);
  const containsFilter = reduce(
    (prev: boolean, curr: K) => prev && !filterSet.has(get(prop)(curr)),
    true
  );
  return filter((u: U) => containsFilter(get(arrayProp)(u)));
};
