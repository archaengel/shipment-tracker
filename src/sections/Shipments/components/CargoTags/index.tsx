import React from 'react';
import { List, Tag } from 'antd';
import { Text } from '../../../../lib/base';
import uniq from 'lodash/fp/uniq';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import { Cargo } from '../../../../lib/types';

interface Props {
  cargo: Cargo[];
}

export const CargoTags = ({ cargo }: Props) => {
  const uniqCargoTypes = pipe<[Cargo[]], string[], string[]>(
    map<Cargo, string>((c) => c.type),
    uniq
  )(cargo);

  return (
    <div>
      <Text strong>Cargo: </Text>
      <List
        style={{ display: 'inline-block' }}
        itemLayout="horizontal"
        dataSource={uniqCargoTypes}
        renderItem={(type) => (
          <Tag key={`type-${type}`} color="lime">
            {type}
          </Tag>
        )}
      ></List>
    </div>
  );
};
