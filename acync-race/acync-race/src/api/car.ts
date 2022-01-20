import { API_URL } from "../constants";

interface carStartResponse {
  velocity: number;
  distance: number;
}

const carDriver = async (
  id: number,
  status: string = "started"
): Promise<carStartResponse> => {
  const resp = await fetch(`${API_URL}engine?id=${id}&status=${status}`, {
    method: "PATCH"
  });
  const resStatus: carStartResponse = await resp.json();
  return resStatus;
};

const carStart = async (id: number): Promise<carStartResponse> => {
  return carDriver(id, "started");
};

const carDrive = async (id: number): Promise<carStartResponse> => {
  return carDriver(id, "drive");
};

const carStop = async (id: number): Promise<carStartResponse> => {
  return carDriver(id, "stopped");
};
export { carStart, carDrive, carStop };
