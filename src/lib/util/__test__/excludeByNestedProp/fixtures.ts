import { createFixtures } from '../..';

const fooBarBazQuuxAtCdr = createFixtures(
  ['cdr'],
  [[['foo', 'bar', 'baz', 'quux']]]
);

const fooBarBazAtCdr = createFixtures(['cdr'], [[['foo', 'bar', 'baz']]]);

export const quuxAtCdrAtCar = createFixtures(
  ['car'],
  [[fooBarBazAtCdr, fooBarBazAtCdr, fooBarBazQuuxAtCdr]]
);

export const noQuuxAtCdrAtCar = createFixtures(
  ['car'],
  [[fooBarBazAtCdr, fooBarBazAtCdr]]
);
