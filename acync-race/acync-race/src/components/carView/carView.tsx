import React, { FC, useEffect, useState } from 'react';
import { ReactComponent as CarIcon } from '../../assets/iconmonstr-car-1.svg';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import EditCarForm from '../editCarForm/editCarForm';

import './carView.css';
import { deleteCar } from '../../api/garage';
import { carDrive, carStart, carStop } from '../../api/car';
import { deleteWinner } from '../../api/winners';
import { CarViewProps } from '../../types/props';

const animations: number[] = [];
const goals: number[] = [];
// eslint-disable-next-line react/function-component-definition
const CarView: FC<CarViewProps> = ({
  id,
  name,
  color,
  onCarInput,
  isRaceStarted,
  onFinish,
}) => {
  const [inEdit, setInEdit] = useState<boolean>(false);
  const [inDrive, setInDrive] = useState<boolean>(false);

  const carEl = document.querySelector<HTMLElement>(`#car-${id}`);

  animations[id] = 0;

  const driveAnimation = (duration: number): void => {
    let startTime: number | null = null;
    animations[id] = 0;
    function animate(timestamp: number): void {
      if (!startTime) {
        startTime = timestamp;
      }
      const runtime = timestamp - startTime;
      const relativeProgress = runtime / duration;

      const left = goals[id] * relativeProgress;
      if (carEl) carEl.style.left = `${left}%`;

      if (runtime < duration && goals[id] > 0) {
        animations[id] = requestAnimationFrame(animate);
      } else {
        onFinish({ id, name, color }, duration);
      }
    }
    animations[id] = requestAnimationFrame(animate);
  };

  function handleEdit(isEdited: boolean): void {
    onCarInput(isEdited);
    setInEdit(false);
  }

  function handleDelete(): void {
    deleteCar(id).then(() => onCarInput(true));
    deleteWinner(id);
  }

  function handleStart(): void {
    goals[id] = 90;
    carStart(id).then((data) => {
      const time = data.distance / data.velocity;
      if (time > 0) {
        driveAnimation(time);
        setInDrive(true);
      }
      carDrive(id)
        .then(() => {})
        .catch(() => {
          cancelAnimationFrame(animations[id]);
        });
    });
  }

  function handleStop(): void {
    if (!isRaceStarted) goals[id] = 0;

    carStop(id);
    cancelAnimationFrame(animations[id]);
    if (carEl) {
      carEl.style.left = '0%';
      cancelAnimationFrame(animations[id]);
    }
    goals[id] = 0;
    setInDrive(false);
  }
  useEffect(() => {
    if (isRaceStarted) {
      handleStart();
    } else {
      handleStop();
    }
  }, [isRaceStarted]);

  useEffect(
    () => () => {
      cancelAnimationFrame(animations[id]);
      handleStop();
    },
    [animations[id]],
  );
  if (!isRaceStarted) cancelAnimationFrame(animations[id]);

  return (
    <div className="track">
      <div className="car-controls">
        <div className="car-edit-button">
          <label htmlFor="car-edit-checkbox">
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
              id="car-edit-checkbox"
            />
          </label>
          {inEdit
          && (
          <EditCarForm
            className="car-edit-form"
            {...{ id, name, color }}
            onCarInput={(isEdited:boolean) => handleEdit(isEdited)}
          />
          )}
        </div>
        {!isRaceStarted
        && (inDrive ? (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            className="car-stop-button-icon"
            onClick={() => handleStop()}
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            className="car-start-button-icon"
            onClick={() => handleStart()}
          />
        ))}
        <button
          type="button"
          className="car-delete-button"
          onClick={() => handleDelete()}
        >
          <DeleteIcon className="car-delete-button-icon" />
        </button>
      </div>
      <div className="car" id={`car-${id}`}>
        <CarIcon className="car-icon" style={{ fill: color }} />
        <span className="car-name">{name}</span>
      </div>
    </div>
  );
};

export default CarView;
