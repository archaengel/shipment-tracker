export type ShipmentsData = {
  shipments: Shipment[];
};

export interface Shipment {
  id: string;
  name: string;
  cargo: Cargo[];
  mode: ShippingMode;
  origin: string;
  services: Service[];
  total: number;
  status: Status;
  userId: string;
  type: ContainerLoad;
}

interface Cargo {
  type: string;
  description: string;
  volume: number;
}

interface Customs {
  type: 'customs';
}

interface Insurace {
  type: 'insurance';
  value?: number;
}

type ShippingMode = 'sea' | 'air';

type ContainerLoad = 'LCL' | 'FCL';

type Status = 'ACTIVE' | 'NEW' | 'COMPLETED';

type Service = Customs | Insurace;
