import React, { FC, useState } from "react";
import { getCar } from "../../api/garage";
import { getWinnersList, RespWinner } from "../../api/winners";
import Pagination from "../pagination/pagination";

import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";

import "./winners.css";
import { WinnersTableLine } from "../../types/props";

let sortMemory = "id";
let orderMemory = true;
let curPageMemory = 1;
const Winners: FC = () => {
  const [isWinnersChanged, setIsWinnersChanged] = useState<boolean>(true);
  const [carsCount, setCarsCount] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(curPageMemory);
  const [tableInfo, setTableInfo] = useState<WinnersTableLine[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [sort, setSort] = useState<string>(sortMemory);
  const [order, setOrder] = useState<boolean>(orderMemory); // true - ASC ; false -DESC

  if (isWinnersChanged) {
    getWinnersList(sort, order ? "ASC" : "DESC", curPage).then((data) => {
      setCarsCount(data.count);
      Promise.all(getTableInfo(data.winners)).then((data) => {
        setTableInfo(data);

        setIsLoading(false);
      });
    });
    setIsWinnersChanged(false);
  }

  const getTableInfo = (winners: RespWinner[]): Promise<WinnersTableLine>[] => {
    const promises = winners.map((winner) => {
      return new Promise<WinnersTableLine>((resolve) => {
        getCar(winner.id).then((car) => {
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

  function handleChangePage(direction: string, page?: number): void {
    if (page) {
      curPageMemory = page;
      setCurPage(page);
    } else {
      if (direction === "next") {
        curPageMemory = curPage + 1;
        setCurPage(curPage + 1);
      }
      if (direction === "prev") {
        curPageMemory = curPage - 1;
        setCurPage(curPage - 1);
      }
    }
    setIsWinnersChanged(true);
  }

  function handleSort(sortValue = "id"): void {
    if (sort === sortValue) {
      orderMemory = !order;
      setOrder(!order);
    } else {
      sortMemory = sortValue;
      orderMemory = true;
      setSort(sortValue);
      setOrder(true);
    }
    setIsWinnersChanged(true);
    setIsWinnersChanged(true);
  }

  if (isLoading) return <div>LOADING...</div>;
  return (
    <div className={`winners`}>
      <h2>Winners ({carsCount})</h2>
      <table className="winners-table">
        <thead>
          <tr>
            <td>№</td>
            <td>Color</td>
            <td>Name</td>
            <td
              className={
                sort === "time"
                  ? order
                    ? "sort-asc"
                    : "sort-desc"
                  : "sort-none"
              }
              onClick={() => {
                handleSort("time");
              }}
            >
              Time
            </td>
            <td
              className={
                sort === "wins"
                  ? order
                    ? "sort-asc"
                    : "sort-desc"
                  : "sort-none"
              }
              onClick={() => {
                handleSort("wins");
              }}
            >
              Wins
            </td>
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
