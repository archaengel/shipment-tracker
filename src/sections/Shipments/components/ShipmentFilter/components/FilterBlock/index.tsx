import React, { useState, useEffect } from 'react';
import { Typography, List } from 'antd';
import { FilterTag } from '..';
import { FacetActionType, FacetAction } from '../../../../actions/types';

const { Text } = Typography;

interface Props {
  label: string;
  dataSource: string[];
  dispatch: (action: FacetAction) => void;
  filters: string[];
  actionType: FacetActionType;
}

export const FilterBlock = ({
  label,
  dataSource,
  dispatch,
  filters,
  actionType,
}: Props) => {
  useEffect(() => {
    console.log(filters);
  }, [filters]);
  return (
    <div>
      <Text strong>Filter by {label}</Text>
      <List
        dataSource={dataSource}
        renderItem={(filter) => (
          <FilterTag
            filters={filters}
            dispatch={dispatch}
            filter={filter}
            actionType={actionType}
          />
        )}
      />
    </div>
  );
};
