import React from 'react';
import { Pagination } from 'antd';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  margin-bottom: 16px;
`;

interface Props {
  page: number;
  limit: number;
  total: number;
  setPage: (page: number) => void;
}

export const ShipmentsPagination = ({ page, limit, total, setPage }: Props) => {
  return (
    <PaginationWrapper>
      <Pagination
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} shipments`
        }
        total={total}
        current={page}
        defaultPageSize={limit}
        onChange={setPage}
      />
    </PaginationWrapper>
  );
};
