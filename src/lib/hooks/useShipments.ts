import axios from 'axios';
import { useQuery } from 'react-query';
import { Shipment, ShipmentsData } from '../types';

const getShipments = async (): Promise<ShipmentsData> => {
  const { data } = await axios.get<Shipment[]>(
    'http://localhost:3001/shipments'
  );

  return { shipments: data };
};

export const useShipments = () => {
  return useQuery<ShipmentsData, 'shipments'>('shipments', getShipments);
};
