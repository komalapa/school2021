import { Car } from "../types/api-response";
import reader, { API_URL } from "./reader";

interface carStartResponse {
  velocity: number;
  distance: number;
}
const carStart = async (
  id: number,
  status: string = "started"
): Promise<carStartResponse> => {
  const data = (await reader(
    `${API_URL}engine?id=${id}&status=${status}`,
    "PATCH"
  )) as string;
  const resStatus: carStartResponse = await JSON.parse(data);
  return resStatus;
};

const carDrive = async (
  id: number,
  status: string = "drive"
): Promise<carStartResponse> => {
  const data = (await reader(
    `${API_URL}engine?id=${id}&status=${status}`,
    "PATCH"
  )) as string;
  const resStatus: carStartResponse = await JSON.parse(data);
  return resStatus;
};

const carStop = async (
  id: number,
  status: string = "stopped"
): Promise<carStartResponse> => {
  const data = (await reader(
    `${API_URL}engine?id=${id}&status=${status}`,
    "PATCH"
  )) as string;
  const resStatus: carStartResponse = await JSON.parse(data);
  return resStatus;
};
export { carStart, carDrive, carStop };
