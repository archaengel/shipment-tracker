import React from 'react';
import { Pagination } from 'antd';

interface Props {
  page: number;
  limit: number;
  total: number;
  setPage: (page: number) => void;
}

export const ShipmentsPagination = ({ page, limit, total, setPage }: Props) => {
  return (
    <Pagination
      total={total}
      current={page}
      defaultPageSize={limit}
      onChange={setPage}
    />
  );
};
