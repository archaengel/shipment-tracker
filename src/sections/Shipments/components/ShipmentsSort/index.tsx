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
        <Option value={ShipmentsOrder.NAME_ASC}>Name: a -> z</Option>
        <Option value={ShipmentsOrder.NAME_DESC}>Name: z -> a</Option>
        <Option value={ShipmentsOrder.ID_ASC}>Shipment ID: Low to High</Option>
        <Option value={ShipmentsOrder.ID_DESC}>Shipment ID: High to Low</Option>
        <Option value={ShipmentsOrder.TOTAL_ASC}>Total: Low to High</Option>
        <Option value={ShipmentsOrder.TOTAL_DESC}>Total: High to Low</Option>
        <Option value={ShipmentsOrder.USERID_ASC}>User ID: Low to High</Option>
        <Option value={ShipmentsOrder.USERID_DESC}>User ID: High to Low</Option>
      </Select>
    </SortWrapper>
  );
};
