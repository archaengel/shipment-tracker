import axios from 'axios';
import { useQuery } from 'react-query';
import { orderShipmentsBy } from '../util';
import { ShipmentsData, ShipmentJSON, ShipmentsOrder } from '../types';
import { fromShipmentJSON } from '../util/fromShipmentJSON';

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
  const { data } = await axios.get<ShipmentJSON[]>(
    `http://localhost:3001/shipments?${idSlug}`
  );

  const total = data.length;
  const parsedShipments = data.map(fromShipmentJSON);
  const orderedShipments = orderShipmentsBy(order)(parsedShipments);
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
