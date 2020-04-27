import React, { useState, useRef, useEffect, useReducer } from 'react';
import { List } from 'antd';
import {
  extractById,
  excludeByProp,
  excludeByNestedProp,
  orderShipmentsBy,
} from '../../lib/util';
import { Content, PageSkeleton, ErrorBanner } from '../../lib/components';
import { useParams } from 'react-router';
import { Shipment, ShipmentsOrder, Cargo, Service } from '../../lib/types';
import { useShipments } from '../../lib/hooks';
import {
  ShipmentCard,
  ShipmentsPagination,
  ShipmentFilters,
  ShipmentsSort,
} from './components';
import styled from 'styled-components';
import pipe from 'lodash/fp/pipe';
import { facetReducer } from './reducers';

const ListItem = styled(List.Item)`
  height: 100%;
`;

const ShipmentsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

const PAGE_SIZE = 20;

interface MatchParams {
  id: string;
}

export const Shipments = () => {
  const [page, setPage] = useState<number>(1);
  const [order, setOrder] = useState<ShipmentsOrder>(ShipmentsOrder.ID_ASC);
  const { id } = useParams<MatchParams>();
  const idRef = useRef<string>(id);
  const { status, data } = useShipments();
  const [filters, dispatch] = useReducer(facetReducer, {
    destinations: [],
    origins: [],
    modes: [],
    types: [],
    statuses: [],
    services: [],
    cargo: [],
  });

  const transform = pipe(
    orderShipmentsBy(order),
    extractById(id),
    excludeByProp<string[], Shipment>(filters.destinations, 'destination'),
    excludeByProp(filters.origins, 'origin'),
    excludeByProp(filters.modes, 'mode'),
    excludeByProp(filters.statuses, 'status'),
    excludeByProp(filters.types, 'type'),
    excludeByNestedProp<string[], Shipment, Cargo>(
      filters.cargo,
      'cargo',
      'type'
    ),
    excludeByNestedProp<string[], Shipment, Service>(
      filters.services,
      'services',
      'type'
    )
  );

  useEffect(() => {
    setPage(1);
    idRef.current = id;
  }, [id]);

  if (status === 'loading') {
    return (
      <Content>
        <PageSkeleton />
      </Content>
    );
  }

  if (status === 'error') {
    return (
      <Content>
        <ErrorBanner />
        <PageSkeleton />
      </Content>
    );
  }

  const filteredShipments = transform(data?.shipments);
  const total = filteredShipments.length;
  const cursor = page > 1 ? (page - 1) * PAGE_SIZE : 0;
  const shipmentsPage = [...filteredShipments].slice(
    cursor,
    cursor + PAGE_SIZE
  );

  const shipmentsSectionElement =
    data && data.shipments.length ? (
      <>
        <ShipmentFilters
          facets={data.facets}
          selectedFilters={filters}
          dispatch={dispatch}
        />
        <ShipmentsHeader>
          <ShipmentsSort order={order} setOrder={setOrder} />
          <ShipmentsPagination
            page={page}
            limit={PAGE_SIZE}
            total={total}
            setPage={setPage}
          />
        </ShipmentsHeader>
        <List
          grid={{ gutter: 8, xl: 3, lg: 2, md: 1 }}
          dataSource={shipmentsPage}
          renderItem={(shipment: Shipment) => (
            <ListItem key={`${shipment.id}`}>
              <ShipmentCard shipment={shipment} />
            </ListItem>
          )}
        ></List>
      </>
    ) : (
      <div>empty</div>
    );

  return <Content>{shipmentsSectionElement}</Content>;
};
