import React from 'react';
import { Tag } from 'antd';
import { PresetStatusColorType } from 'antd/lib/_util/colors';
import { Status } from '../../../../lib/types';

interface Props {
  status: Status;
}

const getTagColor = (status: Status): PresetStatusColorType => {
  switch (status) {
    case 'ACTIVE':
      return 'processing';
    case 'COMPLETED':
      return 'success';
    case 'NEW':
      return 'warning';
  }
};

export const StatusTag = ({ status }: Props) => {
  return <Tag color={getTagColor(status)}>{status}</Tag>;
};
