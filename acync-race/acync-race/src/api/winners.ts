import { API_URL } from "../constants";
import type { RespWinner, WinnersList } from "../types/api";

const getWinnersList = async (
  sort = "id", // | "time" | "wins"
  order = "ASC", // | "DESC"
  page?: number
): Promise<WinnersList> => {
  if (!page) {
    const resp = await fetch(
      `${API_URL}winners/?_page=1&_limit=10&_order=${order}&_sort=${sort}`
    );
    const count = resp.headers.get("X-Total-Count") as string;
    if (+count > 10) {
      const resp = await fetch(
        `${API_URL}winners/?_page=1&_limit=${count}&_order=${order}&_sort=${sort}`
      );
      const winners: RespWinner[] = await resp.json();
      return { winners, count: +count };
    }
    const winners: RespWinner[] = await resp.json();
    return { winners, count: +count };
  }
  const resp = await fetch(
    `${API_URL}winners/?_page=${page}&_limit=10&_order=${order}&_sort=${sort}`
  );
  const winners: RespWinner[] = await resp.json();
  const count = resp.headers.get("X-Total-Count") as string;
  return { winners, count: +count };
};

const getWinner = async (id: number): Promise<RespWinner> => {
  const resp = await fetch(`${API_URL}winners/${id}`);
  const winner: RespWinner = await resp.json();
  return winner;
};

const addWinner = async (id: number, time: number): Promise<boolean> => {
  let response: Response = await fetch(`${API_URL}winners`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, wins: 1, time })
  });
  if (response.status === 201) return true;
  const winners = await getWinnersList();
  const prevRecord = winners?.winners?.find((w) => w.id === id);
  if (prevRecord)
    updateWinner(
      id,
      prevRecord.wins + 1,
      time < prevRecord.time ? time : prevRecord.time
    ).then(() => true);
  return false;
};

const deleteWinner = async (id: number): Promise<boolean> => {
  let response: Response = await fetch(`${API_URL}winners/${id}/?${id}`, {
    method: "DELETE"
  });
  if (response.status !== 200) return false;
  return true;
};

const updateWinner = async (
  id: number,
  wins: number,
  time: number
): Promise<boolean> => {
  let response: Response = await fetch(`${API_URL}winners/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, wins, time })
  });
  if (response.status !== 200) return false;
  return true;
};

export { getWinner, getWinnersList, addWinner, deleteWinner, updateWinner };
export type { RespWinner, WinnersList };
