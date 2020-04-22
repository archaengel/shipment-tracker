import React, { useState } from 'react';
import { Layout, List } from 'antd';
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

export const Shipments = () => {
  const [page, setPage] = useState(1);
  const { status, latestData } = useShipments({ page, limit: PAGE_SIZE });

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'error') {
    return <div>there was an error</div>;
  }

  const shipmentsSectionElement =
    latestData && latestData.shipments.length ? (
      <>
        <ShipmentsPagination
          page={page}
          limit={PAGE_SIZE}
          total={latestData.total}
          setPage={setPage}
        />
        <List
          grid={{ gutter: 8, xl: 3, lg: 2, md: 1 }}
          dataSource={latestData.shipments}
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
