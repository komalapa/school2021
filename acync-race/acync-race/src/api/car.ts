import { API_URL } from '../constants';
import { CarStartResponse } from '../types/api';

const carDriver = async (
  id: number,
  status: string = 'started',
): Promise<CarStartResponse> => {
  const resp = await fetch(`${API_URL}engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  const resStatus: CarStartResponse = await resp.json();
  if (resp.status !== 200) throw new Error('Car is broken');
  return resStatus;
};

const carStart = async (id: number): Promise<CarStartResponse> => carDriver(id, 'started');

const carDrive = async (id: number): Promise<CarStartResponse> => carDriver(id, 'drive');

const carStop = async (id: number): Promise<CarStartResponse> => carDriver(id, 'stopped');

const carRace = (id: number): Promise<CarStartResponse> => carStart(id).then(() => carDrive(id));

export {
  carStart, carDrive, carStop, carRace,
};
