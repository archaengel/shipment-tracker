import React, { useReducer } from 'react';
import { FilterBlock } from './components';
import { FacetActionType } from '../../actions/types';
import { ShipmentsFacets } from '../../../../lib/types';
import { facetReducer } from '../../reducers';

interface Props {
  facets: Readonly<ShipmentsFacets>;
  selectedFilters: ShipmentsFacets;
}

export const ShipmentFilters = ({ facets, selectedFilters }: Props) => {
  const { destinations, origins, modes, types, cargo, services } = facets;
  const [filters, dispatch] = useReducer(facetReducer, selectedFilters);
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
