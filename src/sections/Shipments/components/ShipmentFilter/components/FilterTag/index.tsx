import React, { useState } from 'react';
import { Tag } from 'antd';
import { FacetAction, FacetActionType } from '../../../../actions/types';

const { CheckableTag } = Tag;

interface Props {
  filter: string;
  filters: string[];
  dispatch: (action: FacetAction) => void;
  actionType: FacetActionType;
}

export const FilterTag = ({ filter, filters, dispatch, actionType }: Props) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = (checked: boolean) => {
    if (!checked) {
      dispatch({ type: actionType, payload: [...filters, filter] });
    } else {
      dispatch({
        type: actionType,
        payload: filters.filter((other: string) => other !== filter),
      });
    }
    setIsChecked(checked);
  };

  return (
    <CheckableTag checked={isChecked} onChange={handleChange}>
      {filter.toUpperCase()}
    </CheckableTag>
  );
};
