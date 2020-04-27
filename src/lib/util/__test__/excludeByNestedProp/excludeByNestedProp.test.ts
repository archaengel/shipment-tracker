import { excludeByNestedProp } from '../..';
import { quuxAtCdrAtCar, noQuuxAtCdrAtCar } from './fixtures';

interface Fixture {
  car: NestedFixure[];
}

interface NestedFixure {
  cdr: string;
}

describe('excludeByNestedProp', () => {
  describe('when filtered values appear in an array of objects at the specified key', () => {
    it('removes objects with filtered values', () => {
      const candidate = excludeByNestedProp<string[], Fixture, NestedFixure>(
        ['quux'],
        'car',
        'cdr'
      )(quuxAtCdrAtCar);
      expect(candidate).toStrictEqual(noQuuxAtCdrAtCar);
    });
  });

  describe('when filtered values do not appear in an array of objects at the specified key', () => {
    it('returns unchanged array of objects', () => {
      const candidate = excludeByNestedProp<string[], Fixture, NestedFixure>(
        ['quuz'],
        'car',
        'cdr'
      )(quuxAtCdrAtCar);
      expect(candidate).toStrictEqual(quuxAtCdrAtCar);
    });
  });
});
