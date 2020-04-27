import { createFixtures } from '../../../util';
import { Shipment } from '../../../types';

export const idFixtures = {
  unordered: createFixtures<Shipment>(['id'], [['s1'], ['s3'], ['s4'], ['s2']]),
  desc: createFixtures<Shipment>(['id'], [['s4'], ['s3'], ['s2'], ['s1']]),
  asc: createFixtures<Shipment>(['id'], [['s1'], ['s2'], ['s3'], ['s4']]),
  unorderedWithMode: createFixtures<Shipment>(
    ['id', 'mode'],
    [
      ['s3', 'air'],
      ['s4', 'sea'],
      ['s4', 'air'],
      ['s3', 'sea'],
    ]
  ),
  descWithMode: createFixtures<Shipment>(
    ['id', 'mode'],
    [
      ['s4', 'sea'],
      ['s4', 'air'],
      ['s3', 'air'],
      ['s3', 'sea'],
    ]
  ),
  ascWithMode: createFixtures<Shipment>(
    ['id', 'mode'],
    [
      ['s3', 'air'],
      ['s3', 'sea'],
      ['s4', 'sea'],
      ['s4', 'air'],
    ]
  ),
};

export const nameFixtures = {
  unordered: createFixtures<Shipment>(
    ['name'],
    [['foo'], ['baz'], ['bar'], ['quux']]
  ),
  desc: createFixtures<Shipment>(
    ['name'],
    [['quux'], ['foo'], ['baz'], ['bar']]
  ),
  asc: createFixtures<Shipment>(
    ['name'],
    [['bar'], ['baz'], ['foo'], ['quux']]
  ),
  unorderedWithMode: createFixtures<Shipment>(
    ['name', 'mode'],
    [
      ['foo', 'sea'],
      ['bar', 'sea'],
      ['bar', 'air'],
      ['foo', 'air'],
    ]
  ),
  ascWithMode: createFixtures<Shipment>(
    ['name', 'mode'],
    [
      ['bar', 'sea'],
      ['bar', 'air'],
      ['foo', 'sea'],
      ['foo', 'air'],
    ]
  ),
  descWithMode: createFixtures<Shipment>(
    ['name', 'mode'],
    [
      ['foo', 'sea'],
      ['foo', 'air'],
      ['bar', 'sea'],
      ['bar', 'air'],
    ]
  ),
};

export const totalFixtures = {
  unordered: createFixtures<Shipment>(
    ['total'],
    [[300], [200], [205], [100], [10000], [3000]]
  ),
  asc: createFixtures<Shipment>(
    ['total'],
    [[100], [200], [205], [300], [3000], [10000]]
  ),
  desc: createFixtures<Shipment>(
    ['total'],
    [[10000], [3000], [300], [205], [200], [100]]
  ),
  unorderedWithMode: createFixtures<Shipment>(
    ['total', 'mode'],
    [
      [3000, 'air'],
      [200, 'sea'],
      [200, 'air'],
      [3000, 'sea'],
    ]
  ),
  ascWithMode: createFixtures<Shipment>(
    ['total', 'mode'],
    [
      [200, 'sea'],
      [200, 'air'],
      [3000, 'air'],
      [3000, 'sea'],
    ]
  ),
  descWithMode: createFixtures<Shipment>(
    ['total', 'mode'],
    [
      [3000, 'air'],
      [3000, 'sea'],
      [200, 'sea'],
      [200, 'air'],
    ]
  ),
};

export const userIdFixtures = {
  unordered: createFixtures<Shipment>(
    ['userId'],
    [['U110'], ['U100'], ['U210'], ['U190']]
  ),
  asc: createFixtures<Shipment>(
    ['userId'],
    [['U100'], ['U110'], ['U190'], ['U210']]
  ),
  desc: createFixtures<Shipment>(
    ['userId'],
    [['U210'], ['U190'], ['U110'], ['U100']]
  ),
  unorderedWithMode: createFixtures<Shipment>(
    ['userId', 'mode'],
    [
      ['U300', 'sea'],
      ['U250', 'air'],
      ['U250', 'sea'],
      ['U300', 'air'],
    ]
  ),
  ascWithMode: createFixtures<Shipment>(
    ['userId', 'mode'],
    [
      ['U250', 'air'],
      ['U250', 'sea'],
      ['U300', 'sea'],
      ['U300', 'air'],
    ]
  ),
  descWithMode: createFixtures<Shipment>(
    ['userId', 'mode'],
    [
      ['U300', 'sea'],
      ['U300', 'air'],
      ['U250', 'air'],
      ['U250', 'sea'],
    ]
  ),
};
