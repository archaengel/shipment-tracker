import axios from 'axios';
import { usePaginatedQuery } from 'react-query';
import { Shipment, ShipmentsData, ShipmentsOrder } from '../types';

interface ShipmentsVariables {
  page: number;
  limit: number;
  order: ShipmentsOrder;
  id?: string;
}

const getShipments = async (
  _key: string,
  { page, order, limit, id }: ShipmentsVariables
): Promise<ShipmentsData> => {
  const idSlug = id ? `&id_like=${id}` : id;
  const getOrderSlug = (order: ShipmentsOrder) => {
    switch (order) {
      case ShipmentsOrder.ID_LOW_TO_HIGH:
        return '&_sort=id&_order=asc';
      case ShipmentsOrder.ID_HIGH_TO_LOW:
        return '&_sort=id&_order=desc';
      case ShipmentsOrder.NAME_LOW_TO_HIGH:
        return '&_sort=name&_order=asc';
      case ShipmentsOrder.NAME_HIGH_TO_LOW:
        return '&_sort=name&_order=desc';
    }
  };
  const { data, headers } = await axios.get<Shipment[]>(
    `http://localhost:3001/shipments?_page=${page}&_limit=${limit}${idSlug}${getOrderSlug(
      order
    )}`
  );

  return { shipments: data, total: headers['x-total-count'] };
};

export const useShipments = ({
  page,
  order,
  limit,
  id = '',
}: ShipmentsVariables) => {
  return usePaginatedQuery<ShipmentsData, ['shipments', ShipmentsVariables]>(
    ['shipments', { page, order, limit, id }],
    getShipments
  );
};
