import axios from 'axios';
import { useQuery } from 'react-query';
import { Shipment, ShipmentJSON } from '../types';
import { fromShipmentJSON } from '../util/fromShipmentJSON';

interface ShipmentVariables {
  id: string;
}

interface ShipmentData {
  shipment: Shipment;
}

const getShipment = async (
  _key: string,
  { id }: ShipmentVariables
): Promise<ShipmentData> => {
  const { data } = await axios.get<ShipmentJSON>(
    `http://localhost:3001/shipments/${id}`
  );

  const parsedShipment = fromShipmentJSON(data);

  return { shipment: parsedShipment };
};

export const useShipment = ({ id }: ShipmentVariables) => {
  return useQuery<ShipmentData, ['shipment', ShipmentVariables]>(
    ['shipment', { id }],
    getShipment
  );
};
