import React from 'react';
import { Layout, List } from 'antd';
import { Shipment } from '../../lib/types';
import { useShipments } from '../../lib/hooks';
import styled from 'styled-components';

const { Content: AntdContent } = Layout;

const Content = styled(AntdContent)``;

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
        dataSource={data?.shipments}
        renderItem={(item: Shipment) => <List.Item>{item.name}</List.Item>}
      ></List>
    </Content>
  );
};
