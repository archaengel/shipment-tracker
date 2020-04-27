import React from 'react';
import { Table, Typography } from 'antd';
import { Cargo } from '../../../../lib/types';

const { Title } = Typography;

interface Props {
  dataSource: Cargo[];
}

const cargoColumns = [
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
  },
];

export const CargoTable = ({ dataSource }: Props) => {
  return (
    <Table
      title={() => <Title level={3}>Cargo: </Title>}
      dataSource={dataSource}
      pagination={false}
      columns={cargoColumns}
    />
  );
};
