import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import uniq from 'lodash/fp/uniq';
import get from 'lodash/fp/get';
import flatten from 'lodash/fp/flatten';
import { Shipment, Cargo, Service } from '../../types';

export const createFacets = (data: Shipment[]) => ({
  destinations: pickUniq<Shipment, 'destination'>('destination')(data),
  origins: pickUniq<Shipment, 'origin'>('origin')(data),
  types: pickUniq<Shipment, 'type'>('type')(data),
  modes: pickUniq<Shipment, 'mode'>('mode')(data),
  cargo: pickUniq<Cargo, 'type'>('type')(
    flatten(pickUniq<Shipment, 'cargo'>('cargo')(data))
  ),
  services: pickUniq<Service, 'type'>('type')(
    flatten(pickUniq<Shipment, 'services'>('services')(data))
  ),
});

export const pickUniq = <T, K extends keyof T>(
  property: K
): ((collection: T[]) => T[K][]) => {
  return pipe(map(get(property)), uniq);
};
