import axios from 'axios';

interface UpdateShipmentNameVariables {
  id: string;
  name: string;
}

export const patchShipmentName = async ({
  id,
  name,
}: UpdateShipmentNameVariables) => {
  const { data } = await axios.patch(
    `http://localhost:3001/shipments/${id}`,
    {
      name,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  return data;
};
