import React, { FC, useEffect, useState } from "react";
import { getCars } from "../../api/garage";
import { Car } from "../../types/api-response";
import CarView from "../carView/carView";
import EditCarForm from "../editCarForm/editCarForm";

const Garage: FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    getCars(1).then((data) => setCars(data));
  }, []);
  const carEls = cars.map((car) => <CarView key={car.id} {...car} />);
  return (
    <div className="garage">
      {carEls}
      <EditCarForm {...{ id: 5, name: "камаз", color: "#555555" }} />
    </div>
  );
};

export default Garage;
