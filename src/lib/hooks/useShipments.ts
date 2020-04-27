import axios from 'axios';
import { useQuery } from 'react-query';
import filter from 'lodash/fp/filter';
import { orderShipmentsBy, createFacets } from '../util';
import {
  Shipment,
  ShipmentsData,
  ShipmentJSON,
  ShipmentsOrder,
  ShipmentsFacets,
} from '../types';
import { fromShipmentJSON } from '../util/fromShipmentJSON';

interface ShipmentsVariables {
  page: number;
  limit: number;
  order: ShipmentsOrder;
  filters?: ShipmentsFacets;
  id?: string;
}

const filterByDestination = (
  dests: string[]
): ((collection: Shipment[]) => Shipment[]) => {
  const destsSet = new Set(dests);
  return filter((shipment: Shipment) => destsSet.has(shipment.destination));
};

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
  const shipmentFacets = createFacets(parsedShipments);
  const filteredShipements = filterByDestination(shipmentFacets.destinations)(
    parsedShipments
  );
  const orderedShipments = orderShipmentsBy(order)(filteredShipements);
  const cursor = page > 1 ? (page - 1) * limit : 0;
  const shipmentsPage = [...orderedShipments].slice(cursor, cursor + limit);

  return { shipments: shipmentsPage, total, facets: shipmentFacets };
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
