import React from 'react';
import { Card, Typography, Tag } from 'antd';
import styled from 'styled-components';

const { Text: AntdText, Title, Paragraph } = Typography;

const Text = styled(AntdText)`
  width: 100%;
`;

interface Props {
  shipment: {
    name: string;
    origin: string;
    destination: string;
    status: string;
  };
}

export const ShipmentCard = ({ shipment }: Props) => {
  const { name, origin, destination, status } = shipment;
  return (
    <Card hoverable>
      <Text strong ellipsis>
        {name}
      </Text>
      <Paragraph>
        <span>From: </span>
        {origin}
      </Paragraph>
      <Paragraph>
        <span>Destination: </span>
        {destination}
      </Paragraph>
      <Tag>{status}</Tag>
    </Card>
  );
};
