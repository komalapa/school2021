import React, { FC, useEffect, useState } from "react";
import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import EditCarForm from "../editCarForm/editCarForm";

import "./carView.css";
import { deleteCar } from "../../api/garage";
import { carDrive, carStart, carStop } from "../../api/car";

interface CarViewProps {
  id: number;
  name: string;
  color: string;
  onCarInput: CallableFunction;
  isRaceStarted: boolean;
}

let time = 0;
const CarView: FC<CarViewProps> = ({
  id,
  name,
  color,
  onCarInput,
  isRaceStarted
}) => {
  const [inEdit, setInEdit] = useState<boolean>(false);
  const [inDrive, setInDrive] = useState<boolean>(false);

  let [race, setRace] = useState<boolean>(isRaceStarted);

  const left = React.useRef(0);
  let interval: NodeJS.Timer;
  const animate = () => {
    const carEl = document.querySelector<HTMLElement>(`#car-${id}`);
    if (carEl) {
      if (left.current < 90) {
        left.current = left.current + 1;
      }
      carEl.style.left = `${left.current}%`;
    }
    interval = setTimeout(animate, time / 100);
  };

  function handleEdit(isEdited: boolean) {
    onCarInput(isEdited);
    setInEdit(false);
  }

  function handleDelete() {
    deleteCar(id).then(() => onCarInput(true));
  }

  function handleStart() {
    carStart(id).then((data) => {
      time = data.distance / data.velocity;

      carDrive(id)
        .then(() => console.log("try to win"))
        .catch(() => {
          clearTimeout(interval);
        });
      animate();
    });
    setInDrive(true);
  }

  function handleStop() {
    clearTimeout(interval);
    setInDrive(false);
    carStop(id);
    const carEl = document.querySelector<HTMLElement>(`#car-${id}`);
    if (carEl) {
      left.current = 0;
      carEl.classList.add("no-transition");
      carEl.style.left = `${left.current}%`;
      setTimeout(() => carEl.classList.remove("no-transition"));
    }
  }

  useEffect(() => {
    if (race) {
      handleStart();
      setRace(false);
    }
  }, [race]);

  return (
    <div className="track">
      <div
        className="car"
        id={`car-${id}`}
        style={{ left: `${left.current}%` }}
      >
        <CarIcon className="car-icon" style={{ fill: color }} />
        <span className="car-name">{name}</span>
        <div className="car-controls">
          <div className="car-edit-button">
            <label>
              {inEdit ? (
                <CloseIcon className="car-edit-button-icon" />
              ) : (
                <EditIcon className="car-edit-button-icon" />
              )}
              <input
                type="checkbox"
                checked={inEdit}
                onChange={() => setInEdit(!inEdit)}
                className="car-edit-checkbox"
              />
            </label>
            {inEdit && (
              <EditCarForm
                className="car-edit-form"
                {...{ id, name, color }}
                onCarInput={handleEdit}
              />
            )}
          </div>
          {inDrive ? (
            <span className="car-stop-button-icon" onClick={handleStop} />
          ) : (
            <span className="car-start-button-icon" onClick={handleStart} />
          )}
          <button className="car-delete-button" onClick={handleDelete}>
            <DeleteIcon className="car-delete-button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarView;
