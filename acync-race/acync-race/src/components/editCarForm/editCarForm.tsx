import React, { FC, FormEvent, useState } from 'react';
import { addCar, updateCar } from '../../api/garage';

import getBrand from '../../data/brands-cars';
import getRandomColor from '../../data/colors';
import getModel from '../../data/models-cars';
import { EditCarProps } from '../../types/props';

import './editCarForm.css';
// eslint-disable-next-line react/function-component-definition
const EditCarForm: FC<EditCarProps> = ({
  id,
  name,
  color,
  onCarInput,
  className,
}) => {
  const initColor = color || `#${getRandomColor()}`;
  const initName = name || `${getBrand()} ${getModel()}`;
  const [curColor, setCurColor] = useState<string>(initColor);
  const [curName, setCurName] = useState<string>(initName);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (id) {
      updateCar(id, curName, curColor);
    } else {
      addCar(curName, curColor);
    }
    onCarInput(true);
  }

  function handleName(e: React.FormEvent<HTMLInputElement>): void {
    setCurName(e.currentTarget.value);
  }

  function handleColor(e: React.FormEvent<HTMLInputElement>): void {
    setCurColor(e.currentTarget.value);
  }

  return (
    <form
      className={`edit-car ${className}`}
      onSubmit={(e) => handleSubmit(e)}
      onReset={() => onCarInput(false)}
    >
      <div className="edit-car-inputs">
        <input
          type="text"
          name="car-name"
          id="edit-car-name"
          defaultValue={initName}
          onInput={(e) => {
            handleName(e);
          }}
        />
        <input
          type="color"
          name="car-color"
          id="edit-car-color"
          className="edit-car-color"
          defaultValue={initColor}
          onInput={(e) => {
            handleColor(e);
          }}
        />
      </div>
      <div className="edit-car-buttons">
        <button type="submit">Save</button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};

export default EditCarForm;
