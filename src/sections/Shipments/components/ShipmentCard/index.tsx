import React from 'react';
import { Card, Tag, Typography } from 'antd';
import { Text } from '../../../../lib/base';
import { CargoTags, ServiceTags } from '../../components';
import { Cargo, Service } from '../../../../lib/types';
import styled from 'styled-components';

const { Text: AntdText, Paragraph } = Typography;

const ID = styled(AntdText)`
  flex-grow: 0;
  flex-basis: 120px;
`;

const CardHeader = styled.header`
  display: flex;
`;

interface Props {
  shipment: {
    id: string;
    name: string;
    origin: string;
    destination: string;
    status: string;
    cargo: Cargo[];
    services: Service[];
  };
}

export const ShipmentCard = ({ shipment }: Props) => {
  const { id, name, origin, destination, status, cargo, services } = shipment;

  return (
    <Card hoverable>
      <CardHeader>
        <Text strong ellipsis>
          {name}
        </Text>
        <ID>
          ID: <Text code>{id}</Text>
        </ID>
      </CardHeader>
      <Paragraph>
        <Text ellipsis>
          <Text strong>From: </Text>
          {origin}
        </Text>
        <Text ellipsis>
          <Text strong>To: </Text>
          {destination}
        </Text>
      </Paragraph>
      <Paragraph>
        <CargoTags cargo={cargo} />
        <ServiceTags services={services} />
      </Paragraph>
      <Tag>{status}</Tag>
    </Card>
  );
};
