import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Text, Meta } from '../../../../lib/components';
import { CargoTags, ServiceTags } from '../../components';
import {
  Cargo,
  Service,
  Status,
  ShippingMode,
  ContainerLoad,
} from '../../../../lib/types';
import styled from 'styled-components';

const { Paragraph } = Typography;

const CardTitle = styled(Text)`
  font-size: 16px;
`;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

interface Props {
  shipment: {
    id: string;
    userId: string;
    name: string;
    origin: string;
    destination: string;
    status: Status;
    cargo: Cargo[];
    services: Service[];
    total: number;
    type: ContainerLoad;
    mode: ShippingMode;
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
    type,
    mode,
  } = shipment;

  return (
    <Link to={`/shipment/${id}`}>
      <Card hoverable>
        <CardHeader>
          <CardTitle strong>{name}</CardTitle>
          <Meta id={id} userId={userId} status={status} />
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
          <Text mark>
            {type === 'FCL'
              ? 'A full container load'
              : 'Less than a full container load'}{' '}
            travelling by {mode}.
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            <Text strong>[TOTAL]:</Text>
            {` ${total}`}
          </Text>
        </Paragraph>
      </Card>
    </Link>
  );
};
