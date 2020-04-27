import { createFixtures } from '../..';

export const bazBarCdrAtBar = createFixtures(
  ['foo', 'bar'],
  [
    ['baz', 'baz'],
    ['bar', 'bar'],
    ['quux', 'cdr'],
  ]
);

export const bazBarAtBar = createFixtures(
  ['foo', 'bar'],
  [
    ['baz', 'baz'],
    ['bar', 'bar'],
  ]
);

export const bazAtBar = createFixtures(['foo', 'bar'], [['baz', 'baz']]);
