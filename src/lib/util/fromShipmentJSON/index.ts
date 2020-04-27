import {
  ShipmentJSON,
  Shipment,
  CargoJSON,
  Cargo,
  Service,
  ServiceJSON,
  ServiceType,
} from '../../types';

export function fromShipmentJSON(shipmentJSON: ShipmentJSON): Shipment {
  const { cargo: cargoJSONs, total, services: serviceJSONs } = shipmentJSON;
  return {
    ...shipmentJSON,
    total: Number(total),
    cargo: cargoJSONs.map(fromCargoJSON),
    services: serviceJSONs.map(fromServiceJSON),
  };
}

function fromCargoJSON(cargoJSON: CargoJSON): Cargo {
  return {
    ...cargoJSON,
    volume: Number(cargoJSON.volume),
  };
}

function fromServiceJSON(serviceJSON: ServiceJSON): Service {
  switch (serviceJSON.type) {
    case ServiceType.CUSTOMS:
      return { ...serviceJSON };
    case ServiceType.INSURANCE:
      if (serviceJSON.value) {
        return {
          ...serviceJSON,
          value: Number(serviceJSON.value),
        };
      } else {
        return {
          ...serviceJSON,
        } as Service;
      }
  }
}
