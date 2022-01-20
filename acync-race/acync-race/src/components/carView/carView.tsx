import React, { FC, useEffect, useState } from "react";
import { ReactComponent as CarIcon } from "../../assets/iconmonstr-car-1.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import EditCarForm from "../editCarForm/editCarForm";

import "./carView.css";
import { deleteCar } from "../../api/garage";
import { carDrive, carRace, carStart, carStop } from "../../api/car";

interface CarViewProps {
  id: number;
  name: string;
  color: string;
  onCarInput: CallableFunction;
}

let time = 0;
const CarView: FC<CarViewProps> = ({ id, name, color, onCarInput }) => {
  const [inEdit, setInEdit] = useState<boolean>(false);
  const [inDrive, setInDrive] = useState<boolean>(false);
  // const [time, setTime] = useState<number>(0);
  // const [left, setLeft] = useState<number>(0);

  // const requestRef: any = React.useRef();
  const left = React.useRef(0);
  let interval: NodeJS.Timer;
  const animate = () => {
    const carEl = document.querySelector<HTMLElement>(`#car-${id}`);
    if (carEl) {
      console.log("!!", (time / 100) * 1000);

      console.log(left.current);
      if (left.current < 90) {
        console.log("animation", time, left);
        left.current = left.current + 1;
      }
      carEl.style.left = `${left.current}%`;
    }
    interval = setTimeout(animate, time / 100); // requestRef.current = requestAnimationFrame(animate);
  };

  function handleEdit(isEdited: boolean) {
    onCarInput(isEdited);
    setInEdit(false);
  }

  function handleDelete() {
    deleteCar(id).then(() => onCarInput(true));
  }

  function handleStart() {
    carStart(id)
      .then((data) => {
        time = data.distance / data.velocity;

        carDrive(id)
          .then(() => clearTimeout(interval))
          .catch(() => {
            clearTimeout(interval);
          });
        animate();
      })
      .catch((err) => {
        console.log("STOPPED", err);
      });
    setInDrive(true);
  }

  function handleStop() {
    clearTimeout(interval);
    setInDrive(false);
    carStop(id); // .then((data) => console.log("reset", data));
    const carEl = document.querySelector<HTMLElement>(`#car-${id}`);
    if (carEl) {
      console.log("reset");
      left.current = 0;
      carEl.classList.add("no-transition");
      carEl.style.left = `${left.current}%`;
      setTimeout(() => carEl.classList.remove("no-transition"));
    }
  }

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
