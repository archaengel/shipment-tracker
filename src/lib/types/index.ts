export interface ShipmentsData {
  shipments: Shipment[];
  facets: ShipmentsFacets;
}

export interface ShipmentJSON {
  id: string;
  name: string;
  cargo: CargoJSON[];
  mode: ShippingMode;
  origin: string;
  destination: string;
  services: ServiceJSON[];
  total: string;
  status: Status;
  userId: string;
  type: ContainerLoad;
}

export interface Shipment {
  id: string;
  name: string;
  cargo: Cargo[];
  mode: ShippingMode;
  origin: string;
  destination: string;
  services: Service[];
  total: number;
  status: Status;
  userId: string;
  type: ContainerLoad;
}

export interface CargoJSON {
  type: string;
  description: string;
  volume: number;
}

export interface Cargo {
  type: string;
  description: string;
  volume: number;
}

interface Customs {
  type: ServiceType.CUSTOMS;
}

interface Insurance {
  type: ServiceType.INSURANCE;
  value?: number;
}

interface InsuranceJSON {
  type: ServiceType.INSURANCE;
  value?: string;
}
export enum ServiceType {
  INSURANCE = 'insurance',
  CUSTOMS = 'customs',
}

export type ShippingMode = 'sea' | 'air';

export type ContainerLoad = 'LCL' | 'FCL';

export type Status = 'ACTIVE' | 'NEW' | 'COMPLETED';

export type Service = Customs | Insurance;

export type ServiceJSON = Customs | InsuranceJSON;

export enum ShipmentsOrder {
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  USERID_ASC = 'USERID_ASC',
  USERID_DESC = 'USERID_DESC',
  TOTAL_ASC = 'TOTAL_ASC',
  TOTAL_DESC = 'TOTAL_DESC',
}

export interface ShipmentsFacets {
  destinations: string[];
  origins: string[];
  types: string[];
  modes: string[];
  cargo: string[];
  services: string[];
  statuses: string[];
}

export type ElementOf<T> = T extends (infer U)[] ? U : never;
