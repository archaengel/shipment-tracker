import zipObject from 'lodash/fp/zipObject';

export function createFixtures<T>(keys: (keyof T)[], values: T[keyof T][][]) {
  return values.map((vals: T[keyof T][]) => {
    return zipObject(keys, vals);
  });
}
