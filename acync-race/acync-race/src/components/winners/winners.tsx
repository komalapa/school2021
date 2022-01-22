import { resolve } from "path";
import React, { FC, useContext, useState } from "react";
import { add100Cars, getCar, getCars } from "../../api/garage";
import { addWinner, getWinnersList, RespWinner } from "../../api/winners";
import { WinnersContext } from "../../context/winners-context";
import { Car, Winner } from "../../types/api-response";
import CarView from "../carView/carView";
import EditCarForm from "../editCarForm/editCarForm";
import Pagination from "../pagination/pagination";
import WinnerAlert from "../winner/winner";
import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";

import "./winners.css";

interface WinnersProps {
  visible: boolean;
}

const Winners: FC<WinnersProps> = ({ visible }) => {
  const [isWinnersChanged, setIsWinnersChanged] = useState<boolean>(true);
  // const [winners, setWinners] = useState<RespWinner[]>([]);
  const [carsCount, setCarsCount] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);
  const [tableInfo, setTableInfo] = useState<tableLine[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  interface tableLine {
    name: string;
    color: string;
    time: number;
    wins: number;
    id: number;
  }
  console.log(isWinnersChanged, isLoading);
  if (isWinnersChanged) {
    getWinnersList(curPage).then((data) => {
      setCarsCount(data.count);
      Promise.all(getTableInfo(data.winners)).then((data) => {
        setTableInfo(data);

        setIsLoading(false);
      });
    });
    setIsWinnersChanged(false);
  }
  console.log(tableInfo);
  const getTableInfo = (winners: RespWinner[]): Promise<any>[] => {
    const promises = winners.map((winner) => {
      return new Promise((resolve) => {
        getCar(winner.id).then((car) => {
          console.log("car", car);
          resolve({
            name: car.name,
            color: car.color,
            time: winner.time,
            wins: winner.wins,
            id: winner.id
          });
        });
      });
    });
    return promises;
  };

  const winnersEls = tableInfo.map((winner, ind) => (
    <tr className="winners-line" key={winner.id}>
      <td>{(curPage - 1) * 10 + ind + 1}</td>
      <td>
        <CarIcon className="car-icon" style={{ fill: winner.color }} />
      </td>
      <td>{winner.name}</td>
      <td>{winner.time.toFixed(0)}</td>
      <td>{winner.wins}</td>
    </tr>
  ));

  function handleChangePage(direction: string) {
    if (direction === "next") setCurPage(curPage + 1);
    if (direction === "prev") setCurPage(curPage - 1);
    setIsWinnersChanged(true);
  }

  if (isLoading) return <div>LOADING</div>;
  return (
    <div className={`winners ${visible && "winners-visible"}`}>
      <table className="winners-table">
        <thead>
          <tr>
            <td>№</td>
            <td>Color</td>
            <td>Name</td>
            <td>Time</td>
            <td>Wins</td>
          </tr>
        </thead>
        <tbody>{winnersEls}</tbody>
      </table>
      <Pagination
        page={curPage}
        onChange={handleChangePage}
        count={carsCount}
      />
    </div>
  );
};

export default Winners;
