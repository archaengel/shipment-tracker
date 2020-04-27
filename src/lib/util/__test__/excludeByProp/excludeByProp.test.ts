import { excludeByProp } from '../..';
import { bazBarCdrAtBar, bazBarAtBar, bazAtBar } from './fixutres';

describe('excludeByProp', () => {
  describe('when given list of filtered values with single element', () => {
    it('removes an object when a filtered value appears on that object at a specified key', () => {
      const candidate = excludeByProp(['cdr'], 'bar')(bazBarCdrAtBar);
      expect(candidate).toStrictEqual(bazBarAtBar);
    });

    it('removes nothing when no filtered value appears on an object at a specified key', () => {
      const candidate = excludeByProp(['quux'], 'bar')(bazBarCdrAtBar);
      expect(candidate).toStrictEqual(bazBarCdrAtBar);
    });
  });

  describe('when given list of filtered values with multiple elements', () => {
    it('removes all objects with filtered values at a specified key', () => {
      const canditate = excludeByProp(['cdr', 'bar'], 'bar')(bazBarCdrAtBar);
      expect(canditate).toStrictEqual(bazAtBar);
    });

    it('removes no object when all objects have no filtered values at specified key', () => {
      const candidate = excludeByProp(['car, quux'], 'bar')(bazBarCdrAtBar);
      expect(candidate).toStrictEqual(bazBarCdrAtBar);
    });
  });
});
