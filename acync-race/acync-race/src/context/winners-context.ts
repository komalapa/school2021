import React, { useContext, useEffect, useState } from "react";
import { getWinnersList, RespWinner, WinnersList } from "../api/winners";
import { Winner } from "../types/api-response";

interface WinnersContextProps {
  winners: RespWinner[];
  addWinner: () => void;
  init: () => Promise<WinnersList>;
}

export const WinnersContext = React.createContext<WinnersContextProps>({
  winners: [],
  addWinner: () => {},
  init: () => initContext()
});

async function initContext() {
  return await getWinnersList();
}
