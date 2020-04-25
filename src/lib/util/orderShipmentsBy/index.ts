import { ShipmentsOrder, Shipment } from '../../types';
import orderBy from 'lodash/fp/orderBy';

export const orderShipmentsBy = (order: ShipmentsOrder) => {
  switch (order) {
    case ShipmentsOrder.ID_ASC:
      return orderBy<Shipment>(['id'], ['asc']);
    case ShipmentsOrder.ID_DESC:
      return orderBy<Shipment>(['id'], ['desc']);
    case ShipmentsOrder.NAME_ASC:
      return orderBy<Shipment>(['name'], ['asc']);
    case ShipmentsOrder.NAME_DESC:
      return orderBy<Shipment>(['name'], ['desc']);
    case ShipmentsOrder.USERID_ASC:
      return orderBy<Shipment>(['userId'], ['asc']);
    case ShipmentsOrder.USERID_DESC:
      return orderBy<Shipment>(['userId'], ['desc']);
    case ShipmentsOrder.TOTAL_ASC:
      return orderBy<Shipment>(['total'], ['asc']);
    case ShipmentsOrder.TOTAL_DESC:
      return orderBy<Shipment>(['total'], ['desc']);
  }
};
