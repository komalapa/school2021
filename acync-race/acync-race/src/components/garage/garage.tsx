import React, { FC, useEffect, useState } from "react";
import { add100Cars, getCars } from "../../api/garage";
import { Car } from "../../types/api-response";
import CarView from "../carView/carView";
import EditCarForm from "../editCarForm/editCarForm";

const Garage: FC = () => {
  const [isGarageChanged, setIsGarageChanged] = useState<boolean>(true);
  const [cars, setCars] = useState<Car[]>([]);
  if (isGarageChanged) {
    getCars(1).then((data) => setCars(data));
    setIsGarageChanged(false);
  }
  const carEls = cars.map((car) => (
    <CarView key={car.id} {...car} onCarInput={handleCarInput} />
  ));

  function handleCarInput(isGarageChanged: boolean): void {
    setIsGarageChanged(isGarageChanged);
  }

  function handleAdd100() {
    add100Cars().then(() => {
      setIsGarageChanged(true);
    });
  }

  return (
    <div className="garage">
      <EditCarForm onCarInput={handleCarInput} />
      <button onClick={handleAdd100}>Add 100 cars</button>
      {carEls}
    </div>
  );
};

export default Garage;
