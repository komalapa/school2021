import { API_URL } from '../constants';
import { CarStartResponse, HTTPStatuses } from '../types/api';

const carDriver = async (
  id: number,
  status: string = 'started',
): Promise<CarStartResponse> => {
  const resp = await fetch(`${API_URL}engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  let resStatus: CarStartResponse = { velocity: 0, distance: 0 };
  if (resp.status === HTTPStatuses.OK) resStatus = await resp.json();

  if (resp.status === HTTPStatuses.InternalServerError) throw new Error('Car is broken');
  return resStatus;
};

const carStart = async (id: number): Promise<CarStartResponse> => carDriver(id, 'started');

const carDrive = async (id: number): Promise<CarStartResponse> => carDriver(id, 'drive');

const carStop = async (id: number): Promise<CarStartResponse> => carDriver(id, 'stopped');

const carRace = (id: number): Promise<CarStartResponse> => carStart(id).then(() => carDrive(id));

export {
  carStart, carDrive, carStop, carRace,
};
