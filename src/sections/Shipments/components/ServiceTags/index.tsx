import React from 'react';
import { List, Tag } from 'antd';
import { Text } from '../../../../lib/base';
import uniq from 'lodash/fp/uniq';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import { Service, ServiceType } from '../../../../lib/types';

interface Props {
  services: Service[];
}

export const ServiceTags = ({ services }: Props) => {
  const uniqServiceTypes = pipe<[Service[]], ServiceType[], ServiceType[]>(
    map<Service, ServiceType>((c) => c.type),
    uniq
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
