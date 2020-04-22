import axios from 'axios';
import { usePaginatedQuery } from 'react-query';
import { Shipment, ShipmentsData } from '../types';

interface ShipmentsVariables {
  page: number;
  limit: number;
}

const getShipments = async (
  _key: string,
  { page, limit }: ShipmentsVariables
): Promise<ShipmentsData> => {
  const { data, headers } = await axios.get<Shipment[]>(
    `http://localhost:3001/shipments?_page=${page}&_limit=${limit}`
  );

  return { shipments: data, total: headers['x-total-count'] };
};

export const useShipments = ({ page, limit }: ShipmentsVariables) => {
  return usePaginatedQuery<ShipmentsData, ['shipments', ShipmentsVariables]>(
    ['shipments', { page, limit }],
    getShipments
  );
};
