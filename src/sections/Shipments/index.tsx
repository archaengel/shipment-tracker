import React from 'react';
import { Layout, List } from 'antd';
import { Shipment } from '../../lib/types';
import { useShipments } from '../../lib/hooks';
import { ShipmentCard } from './components';
import styled from 'styled-components';

const { Content: AntdContent } = Layout;

const Content = styled(AntdContent)`
  padding: 60px 120px;
`;

const ListItem = styled(List.Item)`
  height: 100%;
`;

export const Shipments = () => {
  const { status, data } = useShipments();

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'error') {
    return <div>there was an error</div>;
  }

  return (
    <Content>
      <List
        grid={{ gutter: 8, xl: 4, lg: 2, md: 1 }}
        dataSource={data?.shipments}
        renderItem={(shipment: Shipment) => (
          <ListItem>
            <ShipmentCard shipment={shipment} />
          </ListItem>
        )}
      ></List>
    </Content>
  );
};
