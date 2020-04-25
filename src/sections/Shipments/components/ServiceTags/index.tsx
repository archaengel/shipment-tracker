import React from 'react';
import { List, Tag } from 'antd';
import { Text } from '../../../../lib/base';
import sortedUniq from 'lodash/fp/sortedUniq';
import map from 'lodash/fp/map';
import orderBy from 'lodash/fp/orderBy';
import pipe from 'lodash/fp/pipe';
import { Service, ServiceType } from '../../../../lib/types';

interface Props {
  services: Service[];
}

export const ServiceTags = ({ services }: Props) => {
  const uniqServiceTypes = pipe<
    [Service[]],
    Service[],
    ServiceType[],
    ServiceType[]
  >(
    orderBy<Service>(['type'], ['asc']),
    map<Service, ServiceType>((c) => c.type),
    sortedUniq
  )(services);

  const renderTag = (type: ServiceType) => {
    return (
      <Tag
        key={`service-${type}`}
        color={type === ServiceType.CUSTOMS ? 'geekblue' : 'orange'}
      >
        {type.toUpperCase()}
      </Tag>
    );
  };

  return (
    <div>
      <Text strong>Services: </Text>
      <List
        style={{ display: 'inline-block' }}
        itemLayout="horizontal"
        dataSource={uniqServiceTypes}
        renderItem={renderTag}
      ></List>
    </div>
  );
};
