import { orderShipmentsBy } from '../useShipments';
import { Shipment, ShipmentsOrder } from '../../types';

type Fixture = Pick<Shipment, 'id' | 'name'>;

const shipmentsFixture: Fixture[] = [
  {
    id: 's1',
    name: 'Foo',
  },
  {
    id: 's2',
    name: 'Bar',
  },
  {
    id: 's3',
    name: 'Baz',
  },
  {
    id: 's4',
    name: 'Baz',
  },
];

const fixturesByIdDesc: Fixture[] = [
  {
    id: 's4',
    name: 'Baz',
  },
  {
    id: 's3',
    name: 'Baz',
  },
  {
    id: 's2',
    name: 'Bar',
  },
  {
    id: 's1',
    name: 'Foo',
  },
];

const fixturesByNameAsc: Fixture[] = [
  {
    id: 's2',
    name: 'Bar',
  },
  {
    id: 's3',
    name: 'Baz',
  },
  {
    id: 's4',
    name: 'Baz',
  },
  {
    id: 's1',
    name: 'Foo',
  },
];

const fixturesByNameDesc: Fixture[] = [
  {
    id: 's1',
    name: 'Foo',
  },
  {
    id: 's3',
    name: 'Baz',
  },
  {
    id: 's4',
    name: 'Baz',
  },
  {
    id: 's2',
    name: 'Bar',
  },
];

describe('orderShipmentsBy', () => {
  it('orders by id (descending)', () => {
    const orderByIdDesc = orderShipmentsBy(ShipmentsOrder.ID_HIGH_TO_LOW);
    expect(orderByIdDesc(shipmentsFixture)).toStrictEqual(fixturesByIdDesc);
  });

  it('orders by id (ascending)', () => {
    const orderByIdAsc = orderShipmentsBy(ShipmentsOrder.ID_LOW_TO_HIGH);
    expect(orderByIdAsc(shipmentsFixture)).toStrictEqual(shipmentsFixture);
  });

  it('orders by name (descending)', () => {
    const orderByNameDesc = orderShipmentsBy(ShipmentsOrder.NAME_HIGH_TO_LOW);
    expect(orderByNameDesc(shipmentsFixture)).toStrictEqual(fixturesByNameDesc);
  });

  it('orders by name (ascending)', () => {
    const orderByNameAsc = orderShipmentsBy(ShipmentsOrder.NAME_LOW_TO_HIGH);
    expect(orderByNameAsc(shipmentsFixture)).toStrictEqual(fixturesByNameAsc);
  });
});
