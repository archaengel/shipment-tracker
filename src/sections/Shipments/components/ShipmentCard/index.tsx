import React from 'react';
import { Card, Tag, Typography } from 'antd';
import { Text } from '../../../../lib/base';
import { CargoTags, ServiceTags } from '../../components';
import { Cargo, Service } from '../../../../lib/types';
import styled from 'styled-components';

const { Text: AntdText, Paragraph } = Typography;

const ID = styled.div`
  flex-grow: 0;
  flex-basis: 220px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const IDText = styled(AntdText)`
  margin-bottom: 5px;
`;

const CardHeader = styled.header`
  display: flex;
`;

interface Props {
  shipment: {
    id: string;
    userId: string;
    name: string;
    origin: string;
    destination: string;
    status: string;
    cargo: Cargo[];
    services: Service[];
    total: number;
  };
}

export const ShipmentCard = ({ shipment }: Props) => {
  const {
    id,
    userId,
    name,
    origin,
    destination,
    status,
    cargo,
    services,
    total,
  } = shipment;

  return (
    <Card hoverable>
      <CardHeader>
        <Text strong ellipsis>
          {name}
        </Text>
        <ID>
          <IDText>
            Shipment ID: <Text code>{id}</Text>
          </IDText>
          <IDText>
            User ID: <Text code>{userId}</Text>
          </IDText>
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
      <Paragraph>
        <Text>
          <Text mark strong>
            [TOTAL]:
          </Text>
          {` ${total}`}
        </Text>
      </Paragraph>
      <Tag>{status}</Tag>
    </Card>
  );
};
