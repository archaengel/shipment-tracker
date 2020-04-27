import { ShipmentsFacets } from '../../../lib/types';
import { FacetAction, FacetActionType } from '../actions/types';

export const facetReducer = (state: ShipmentsFacets, action: FacetAction) => {
  switch (action.type) {
    case FacetActionType.UPDATE_DESTINATIONS:
      return {
        ...state,
        destinations: action.payload,
      };
    case FacetActionType.UPDATE_ORIGINS:
      return {
        ...state,
        origins: action.payload,
      };
    case FacetActionType.UPDATE_MODES:
      return {
        ...state,
        modes: action.payload,
      };
    case FacetActionType.UPDATE_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case FacetActionType.UPDATE_CARGO:
      return {
        ...state,
        cargo: action.payload,
      };
    case FacetActionType.UPDATE_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
  }
};
