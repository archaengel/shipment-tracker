export type ShipmentsData = {
  shipments: Shipment[];
  total: number;
};

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

export enum ServiceType {
  INSURANCE = 'insurance',
  CUSTOMS = 'customs',
}

type ShippingMode = 'sea' | 'air';

type ContainerLoad = 'LCL' | 'FCL';

export type Status = 'ACTIVE' | 'NEW' | 'COMPLETED';

export type Service = Customs | Insurance;
