import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import { ShipmentsOrder } from '../../../../lib/types';

const { Option } = Select;

const SortWrapper = styled.div`
  margin-bottom: 16px;
`;

interface Props {
  order: ShipmentsOrder;
  setOrder: (order: ShipmentsOrder) => void;
}

export const ShipmentsSort = ({ order, setOrder }: Props) => {
  return (
    <SortWrapper>
      <Select value={order} onChange={setOrder}>
        <Option value={ShipmentsOrder.NAME_LOW_TO_HIGH}>Name: a -> z</Option>
        <Option value={ShipmentsOrder.NAME_HIGH_TO_LOW}>Name: z -> a</Option>
        <Option value={ShipmentsOrder.ID_LOW_TO_HIGH}>ID: Low to High</Option>
        <Option value={ShipmentsOrder.ID_HIGH_TO_LOW}>ID: High to Low</Option>
      </Select>
    </SortWrapper>
  );
};
