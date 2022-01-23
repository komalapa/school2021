import React, { FC, useState } from 'react';
import { add100Cars, getCars } from '../../api/garage';
import { addWinner } from '../../api/winners';
import { Car, Winner } from '../../types/api';
import { GarageProps } from '../../types/props';
import CarView from '../carView/carView';
import EditCarForm from '../editCarForm/editCarForm';
import Pagination from '../pagination/pagination';
import WinnerAlert from '../winner/winner';

import './garage.css';

let haveWinner = false;
// eslint-disable-next-line react/function-component-definition
const Garage: FC<GarageProps> = ({ hidden }) => {
  const [isGarageChanged, setIsGarageChanged] = useState<boolean>(true);
  const [cars, setCars] = useState<Car[]>([]);
  const [carsCount, setCarsCount] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);
  const [isRaceStarted, setIsRaceStarted] = useState<boolean>(false);

  const [winner, setWinner] = useState<Winner | null>(null);

  if (isGarageChanged) {
    getCars(curPage).then((data) => {
      setCars(data.cars);
      setCarsCount(data.count);
    });
    setIsGarageChanged(false);
  }

  function handleCarInput(isGarageChangedProp: boolean): void {
    setIsGarageChanged(isGarageChangedProp);
  }

  function handleAdd100(): void {
    add100Cars().then(() => {
      setIsGarageChanged(true);
    });
  }

  function handleStopRace(): void {
    setIsRaceStarted(false);

    setWinner(null);
    haveWinner = false;
  }

  function handleChangePage(direction: string, page?: number): void {
    if (isRaceStarted) handleStopRace();
    if (page) {
      setCurPage(page);
    } else {
      if (direction === 'next') setCurPage(curPage + 1);
      if (direction === 'prev') setCurPage(curPage - 1);
    }
    setIsGarageChanged(true);
  }

  function handleStartRace(): void {
    setIsRaceStarted(true);
    setWinner(null);
    haveWinner = false;
  }

  function handleFinished(car: Car, time: number): void {
    if (!haveWinner && isRaceStarted) {
      haveWinner = true;
      setWinner({ car, time: time / 1000 });
      addWinner(car.id, time / 1000);
    }
  }

  const carEls = cars.map((car) => (
    <CarView
      key={car.id}
      id={car.id}
      name={car.name}
      color={car.color}
      onCarInput={() => handleCarInput}
      isRaceStarted={isRaceStarted}
      onFinish={(finishedCar: Car, time: number) => handleFinished(finishedCar, time)}
    />
  ));

  return (
    <div className={`garage ${!hidden && 'hidden'}`}>
      <h2>Garage</h2>
      {isRaceStarted && winner && (
        <WinnerAlert car={winner.car} time={winner.time} />
      )}
      <EditCarForm
        onCarInput={(isChanged: boolean) => handleCarInput(isChanged)}
      />
      <div className="garage-controls">
        <button type="button" onClick={handleAdd100}>
          Add 100 cars
        </button>
        {isRaceStarted ? (
          <button type="button" onClick={handleStopRace}>
            Stop Race
          </button>
        ) : (
          <button type="button" onClick={handleStartRace}>
            Start Race
          </button>
        )}
      </div>
      <span className="garage-count">
        {`${carsCount}
        ${carsCount > 1 || carsCount === 0
          ? 'cars in the collection'
          : 'cars in the collection'}`}
      </span>
      {carEls}
      <Pagination
        page={curPage}
        onChange={(direct: string, pg?: number) => handleChangePage(direct, pg)}
        count={carsCount}
      />
    </div>
  );
};

export default Garage;
