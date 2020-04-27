import React from 'react';
import { FilterBlock } from './components';
import { FacetActionType, FacetAction } from '../../actions/types';
import { ShipmentsFacets } from '../../../../lib/types';

interface Props {
  facets: Readonly<ShipmentsFacets>;
  selectedFilters: ShipmentsFacets;
  dispatch: (action: FacetAction) => void;
}

export const ShipmentFilters = ({
  facets,
  selectedFilters,
  dispatch,
}: Props) => {
  const {
    destinations,
    origins,
    modes,
    types,
    statuses,
    cargo,
    services,
  } = facets;
  return (
    <div>
      <FilterBlock
        label="Destinations"
        dispatch={dispatch}
        dataSource={destinations}
        filters={selectedFilters.destinations}
        actionType={FacetActionType.UPDATE_DESTINATIONS}
      />
      <FilterBlock
        label="Origins"
        dispatch={dispatch}
        dataSource={origins}
        filters={selectedFilters.origins}
        actionType={FacetActionType.UPDATE_ORIGINS}
      />
      <FilterBlock
        label="Modes"
        dispatch={dispatch}
        dataSource={modes}
        filters={selectedFilters.modes}
        actionType={FacetActionType.UPDATE_MODES}
      />
      <FilterBlock
        label="Loads"
        dispatch={dispatch}
        dataSource={types}
        filters={selectedFilters.types}
        actionType={FacetActionType.UPDATE_TYPES}
      />
      <FilterBlock
        label="Status"
        dispatch={dispatch}
        dataSource={statuses}
        filters={selectedFilters.types}
        actionType={FacetActionType.UPDATE_STATUSES}
      />
      <FilterBlock
        label="Cargo"
        dispatch={dispatch}
        dataSource={cargo}
        filters={selectedFilters.cargo}
        actionType={FacetActionType.UPDATE_CARGO}
      />
      <FilterBlock
        label="Services"
        dispatch={dispatch}
        dataSource={services}
        filters={selectedFilters.services}
        actionType={FacetActionType.UPDATE_SERVICES}
      />
    </div>
  );
};
