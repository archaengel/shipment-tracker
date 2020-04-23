import axios from 'axios';
import { usePaginatedQuery } from 'react-query';
import { Shipment, ShipmentsData } from '../types';

interface ShipmentsVariables {
  page: number;
  limit: number;
  id?: string;
}

const getShipments = async (
  _key: string,
  { page, limit, id }: ShipmentsVariables
): Promise<ShipmentsData> => {
  const idSlug = id ? `id_like=${id}` : id;
  const { data, headers } = await axios.get<Shipment[]>(
    `http://localhost:3001/shipments?_page=${page}&_limit=${limit}&${idSlug}`
  );

  return { shipments: data, total: headers['x-total-count'] };
};

export const useShipments = ({ page, limit, id = '' }: ShipmentsVariables) => {
  return usePaginatedQuery<ShipmentsData, ['shipments', ShipmentsVariables]>(
    ['shipments', { page, limit, id }],
    getShipments
  );
};
