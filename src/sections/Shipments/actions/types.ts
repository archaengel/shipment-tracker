export enum FacetActionType {
  UPDATE_DESTINATIONS = 'UPDATE_DESTINATIONS',
  UPDATE_ORIGINS = 'UPDATE_ORIGINS',
  UPDATE_MODES = 'UPDATE_MODES',
  UPDATE_TYPES = 'UPDATE_TYPES',
  UPDATE_CARGO = 'UPDATE_CARGO',
  UPDATE_SERVICES = 'UPDATE_SERVICES',
}

export type FacetAction =
  | { type: FacetActionType.UPDATE_DESTINATIONS; payload: string[] }
  | { type: FacetActionType.UPDATE_ORIGINS; payload: string[] }
  | { type: FacetActionType.UPDATE_MODES; payload: string[] }
  | { type: FacetActionType.UPDATE_TYPES; payload: string[] }
  | { type: FacetActionType.UPDATE_CARGO; payload: string[] }
  | { type: FacetActionType.UPDATE_SERVICES; payload: string[] };
