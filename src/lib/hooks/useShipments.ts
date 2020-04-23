import axios from 'axios';
import { useQuery } from 'react-query';
import orderBy from 'lodash/fp/orderBy';
import { Shipment, ShipmentsData, ShipmentsOrder } from '../types';

interface ShipmentsVariables {
  page: number;
  limit: number;
  order: ShipmentsOrder;
  id?: string;
}

export const orderShipmentsBy = (order: ShipmentsOrder) => {
  switch (order) {
    case ShipmentsOrder.ID_LOW_TO_HIGH:
      return orderBy<Shipment>(['id'], ['asc']);
    case ShipmentsOrder.ID_HIGH_TO_LOW:
      return orderBy<Shipment>(['id'], ['desc']);
    case ShipmentsOrder.NAME_LOW_TO_HIGH:
      return orderBy<Shipment>(['name'], ['asc']);
    case ShipmentsOrder.NAME_HIGH_TO_LOW:
      return orderBy<Shipment>(['name'], ['desc']);
  }
};

const getShipments = async (
  _key: string,
  { page, order, limit, id }: ShipmentsVariables
): Promise<ShipmentsData> => {
  const idSlug = id ? `&id_like=${id}` : id;
  const { data } = await axios.get<Shipment[]>(
    `http://localhost:3001/shipments?${idSlug}`
  );

  const total = data.length;
  const orderedShipments = orderShipmentsBy(order)(data);
  const cursor = page > 1 ? (page - 1) * limit : 0;
  const shipmentsPage = [...orderedShipments].slice(cursor, cursor + limit);

  return { shipments: shipmentsPage, total };
};

export const useShipments = ({
  page,
  order,
  limit,
  id = '',
}: ShipmentsVariables) => {
  return useQuery<ShipmentsData, ['shipments', ShipmentsVariables]>(
    ['shipments', { page, order, limit, id }],
    getShipments
  );
};
