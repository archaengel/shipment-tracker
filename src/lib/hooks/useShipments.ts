import axios from 'axios';
import { useQuery } from 'react-query';
import { createFacets } from '../util';
import { ShipmentsData, ShipmentJSON } from '../types';
import { fromShipmentJSON } from '../util/fromShipmentJSON';

const getShipments = async (_key: string): Promise<ShipmentsData> => {
  const { data } = await axios.get<ShipmentJSON[]>(
    `http://localhost:3001/shipments`
  );

  const parsedShipments = data.map(fromShipmentJSON);
  const shipmentFacets = createFacets(parsedShipments);

  return { shipments: parsedShipments, facets: shipmentFacets };
};

export const useShipments = () => {
  return useQuery<ShipmentsData, ['shipments']>(['shipments'], getShipments);
};
