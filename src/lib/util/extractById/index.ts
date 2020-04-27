import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import toUpper from 'lodash/fp/toUpper';
import includes from 'lodash/fp/includes';

export const extractById = <T extends { id: string }>(
  id: string | undefined
) => {
  return filter<T>(pipe(get('id'), includes(id ? toUpper(id) : '')));
};
