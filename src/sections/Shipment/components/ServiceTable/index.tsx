import React from 'react';
import { Table, Typography } from 'antd';
import { Service } from '../../../../lib/types';
const { Title } = Typography;

interface Props {
  dataSource: Service[];
}

const serviceColumns = [
  {
    title: 'Type',
    dataIndex: 'type',
    render: (text: string) => text.toUpperCase(),
  },
  {
    title: 'Value',
    dataIndex: 'value',
    render: (text: string) => {
      return text ? text : 'N/A';
    },
  },
];

export const ServiceTable = ({ dataSource }: Props) => {
  return (
    <Table
      title={() => <Title level={3}>Service: </Title>}
      dataSource={dataSource}
      pagination={false}
      columns={serviceColumns}
    />
  );
};
