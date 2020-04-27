import React from 'react';
import { Tag, Typography } from 'antd';
import styled from 'styled-components';
import { Text, StatusTag } from '..';
import { Status, ContainerLoad, ShippingMode } from '../../types';

const { Text: AntdText } = Typography;

const MetaWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 220px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const MetaText = styled(AntdText)`
  margin-bottom: 5px;
`;

interface Props {
  id: string;
  userId: string;
  status: Status;
  type?: ContainerLoad;
  mode?: ShippingMode;
}

export const Meta = ({ id, userId, status, type, mode }: Props) => {
  const modeElement = mode ? (
    <MetaText>
      Mode: <Tag color="magenta">{mode.toUpperCase()}</Tag>
    </MetaText>
  ) : null;
  const typeElement = type ? (
    <MetaText>
      Load: <Tag color="magenta">{type.toUpperCase()}</Tag>
    </MetaText>
  ) : null;

  return (
    <MetaWrapper>
      <MetaText>
        Shipment ID: <Text code>{id}</Text>
      </MetaText>
      <MetaText>
        User ID: <Text code>{userId}</Text>
      </MetaText>
      <MetaText>
        Status: <StatusTag status={status} />
      </MetaText>
      {modeElement}
      {typeElement}
    </MetaWrapper>
  );
};
