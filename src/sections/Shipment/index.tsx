import React from 'react';
import { useParams } from 'react-router';
import { useShipment } from '../../lib/hooks';
import { Tag, Typography } from 'antd';
import { Content as BaseContent, Text } from '../../lib/base';
import { CargoTable, ServiceTable, StatusTag } from './components';
import styled from 'styled-components';

const { Title, Text: AntdText, Paragraph } = Typography;

interface MatchParams {
  id: string;
}

const Content = styled(BaseContent)`
  background: white;
`;

const ShipmentHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Meta = styled.div`
  flex-grow: 0;
  flex-basis: 220px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const MetaText = styled(AntdText)`
  margin-bottom: 5px;
`;
const TagWrapper = styled.div`
  margin-bottom: 5px;
`;

export const Shipment = () => {
  const { id } = useParams<MatchParams>();
  const { status, data } = useShipment({ id });

  if (status === 'error') {
    return <div>error</div>;
  }

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  const shipmentElement =
    data && data.shipment ? (
      <>
        <ShipmentHeader>
          <Title level={1}>{data.shipment.name}</Title>
          <Meta>
            <MetaText>
              Shipment ID: <Text code>{data.shipment.id}</Text>
            </MetaText>
            <MetaText>
              User ID: <Text code>{data.shipment.userId}</Text>
            </MetaText>
            <MetaText>
              Status: <StatusTag status={data.shipment.status} />
            </MetaText>
            <TagWrapper>
              <Tag color="processing">{data.shipment.mode.toUpperCase()}</Tag>
            </TagWrapper>
            <TagWrapper>
              <Tag color="pink">{data.shipment.type.toUpperCase()}</Tag>
            </TagWrapper>
          </Meta>
        </ShipmentHeader>
        <Paragraph>
          <Title level={2} ellipsis>
            <Text strong>From: </Text>
            {data.shipment.origin}
          </Title>
          <Title level={2} ellipsis>
            <Text strong>To: </Text>
            {data.shipment.destination}
          </Title>
        </Paragraph>
        <Paragraph>
          <Title level={2}>
            <Text strong mark>
              [Total]:
            </Text>{' '}
            {data.shipment.total}
          </Title>
        </Paragraph>
        <CargoTable dataSource={data.shipment.cargo} />
        <ServiceTable dataSource={data.shipment.services} />
      </>
    ) : null;

  return <Content>{shipmentElement}</Content>;
};
