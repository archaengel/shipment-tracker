import { orderShipmentsBy } from '../../';
import { ShipmentsOrder } from '../../../types';
import {
  idFixtures as ids,
  nameFixtures as names,
  userIdFixtures as userIds,
  totalFixtures as totals,
} from './fixtures';

const orderByIdAsc = orderShipmentsBy(ShipmentsOrder.ID_ASC);
const orderByIdDesc = orderShipmentsBy(ShipmentsOrder.ID_DESC);
const orderByNameAsc = orderShipmentsBy(ShipmentsOrder.NAME_ASC);
const orderByNameDesc = orderShipmentsBy(ShipmentsOrder.NAME_DESC);
const orderByTotalAsc = orderShipmentsBy(ShipmentsOrder.TOTAL_ASC);
const orderByTotalDesc = orderShipmentsBy(ShipmentsOrder.TOTAL_DESC);
const orderByUserIdAsc = orderShipmentsBy(ShipmentsOrder.USERID_ASC);
const orderByUserIdDesc = orderShipmentsBy(ShipmentsOrder.USERID_DESC);

describe('orderShipmentsBy', () => {
  describe('when ordering by id', () => {
    it('orders descending', () => {
      expect(orderByIdDesc(ids.unordered)).toStrictEqual(ids.desc);
    });

    it('orders ascending', () => {
      expect(orderByIdAsc(ids.unordered)).toStrictEqual(ids.asc);
    });

    it('is stable', () => {
      expect(orderByIdAsc(ids.unorderedWithMode)).toStrictEqual(
        ids.ascWithMode
      );
      expect(orderByIdDesc(ids.unorderedWithMode)).toStrictEqual(
        ids.descWithMode
      );
    });
  });

  describe('when ordering by name', () => {
    it('orders descending', () => {
      expect(orderByNameDesc(names.unordered)).toStrictEqual(names.desc);
    });

    it('orders ascending', () => {
      expect(orderByNameAsc(names.unordered)).toStrictEqual(names.asc);
    });

    it('is stable', () => {
      expect(orderByNameAsc(names.unorderedWithMode)).toStrictEqual(
        names.ascWithMode
      );
      expect(orderByNameDesc(names.unorderedWithMode)).toStrictEqual(
        names.descWithMode
      );
    });
  });

  describe('when ordering by total', () => {
    it('orders descending', () => {
      expect(orderByTotalDesc(totals.unordered)).toStrictEqual(totals.desc);
    });

    it('orders ascending', () => {
      expect(orderByTotalAsc(totals.unordered)).toStrictEqual(totals.asc);
    });

    it('is stable', () => {
      expect(orderByTotalAsc(totals.unorderedWithMode)).toStrictEqual(
        totals.ascWithMode
      );
      expect(orderByTotalDesc(totals.unorderedWithMode)).toStrictEqual(
        totals.descWithMode
      );
    });
  });

  describe('when ordering by userId', () => {
    it('orders descending', () => {
      expect(orderByUserIdDesc(userIds.unordered)).toStrictEqual(userIds.desc);
    });

    it('orders ascending', () => {
      expect(orderByUserIdAsc(userIds.unordered)).toStrictEqual(userIds.asc);
    });

    it('is stable', () => {
      expect(orderByUserIdAsc(userIds.unorderedWithMode)).toStrictEqual(
        userIds.ascWithMode
      );
      expect(orderByUserIdDesc(userIds.unorderedWithMode)).toStrictEqual(
        userIds.descWithMode
      );
    });
  });
});
