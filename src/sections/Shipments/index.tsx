import React, { useState, useRef, useEffect } from 'react';
import { List } from 'antd';
import { Content } from '../../lib/base';
import { useParams } from 'react-router';
import { Shipment, ShipmentsOrder } from '../../lib/types';
import { useShipments } from '../../lib/hooks';
import {
  ShipmentCard,
  ShipmentsPagination,
  ShipmentFilters,
} from './components';
import styled from 'styled-components';
import { ShipmentsSort } from './components/ShipmentsSort';

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
  const { status, data } = useShipments({
    page,
    order,
    limit: PAGE_SIZE,
    id,
  });

  useEffect(() => {
    setPage(1);
    idRef.current = id;
  }, [id]);

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'error') {
    return <div>there was an error</div>;
  }

  const shipmentsSectionElement =
    data && data.shipments.length ? (
      <>
        <ShipmentFilters facets={data.facets} selectedFilters={data.facets} />
        <ShipmentsHeader>
          <ShipmentsSort order={order} setOrder={setOrder} />
          <ShipmentsPagination
            page={page}
            limit={PAGE_SIZE}
            total={data.total}
            setPage={setPage}
          />
        </ShipmentsHeader>
        <List
          grid={{ gutter: 8, xl: 3, lg: 2, md: 1 }}
          dataSource={data.shipments}
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
