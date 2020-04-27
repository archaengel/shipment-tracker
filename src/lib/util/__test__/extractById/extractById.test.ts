import { extractById } from '../..';
import { barBazQuux, barBaz, quux } from './fixtures';

describe('extractById', () => {
  describe('when passed empty undefined', () => {
    it('returns array unchanged', () => {
      const candidate = extractById(undefined)(barBazQuux);
      expect(candidate).toStrictEqual(barBazQuux);
    });
  });

  describe('when passed partial id', () => {
    it('filters objects with ids that do not match', () => {
      const candidateBa = extractById('ba')(barBazQuux);
      const candidateQu = extractById('qu')(barBazQuux);
      expect(candidateBa).toStrictEqual(barBaz);
      expect(candidateQu).toStrictEqual(quux);
    });
  });
});
