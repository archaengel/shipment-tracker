import React, { useState, useRef, useEffect } from 'react';
import { Layout, List } from 'antd';
import { useParams } from 'react-router';
import { Shipment } from '../../lib/types';
import { useShipments } from '../../lib/hooks';
import { ShipmentCard, ShipmentsPagination } from './components';
import styled from 'styled-components';

const { Content: AntdContent } = Layout;

const Content = styled(AntdContent)`
  padding: 60px 120px;
`;

const ListItem = styled(List.Item)`
  height: 100%;
`;

const PAGE_SIZE = 20;

interface MatchParams {
  id: string;
}

export const Shipments = () => {
  const [page, setPage] = useState<number>(1);
  const { id } = useParams<MatchParams>();
  const idRef = useRef<string>(id);
  const { status, resolvedData } = useShipments({ page, limit: PAGE_SIZE, id });

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
    resolvedData && resolvedData.shipments.length ? (
      <>
        <ShipmentsPagination
          page={page}
          limit={PAGE_SIZE}
          total={resolvedData.total}
          setPage={setPage}
        />
        <List
          grid={{ gutter: 8, xl: 3, lg: 2, md: 1 }}
          dataSource={resolvedData.shipments}
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
