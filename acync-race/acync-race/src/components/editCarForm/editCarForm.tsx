import React, { FC, FormEvent, useState } from "react";
import { addCar, updateCar } from "../../api/garage";
import getBrand from "../../data/brands-cars";
import getModel from "../../data/models-cars";
import "./editCarForm.css";

interface EditCarProps {
  id?: number;
  name?: string;
  color?: string;
  onCarInput: CallableFunction;
}

const EditCarForm: FC<EditCarProps> = ({ id, name, color, onCarInput }) => {
  const initColor =
    color || `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const initName = name || `${getBrand()} ${getModel()}`;
  console.log(initColor);
  const [curColor, setCurColor] = useState<string>(initColor);
  const [curName, setCurName] = useState<string>(initName);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(curColor, curName, id);
    id ? updateCar(id, curName, curColor) : addCar(curName, curColor);
    onCarInput(true);
  }

  function handleName(e: React.FormEvent<HTMLInputElement>) {
    setCurName(e.currentTarget.value);
  }

  function handleColor(e: React.FormEvent<HTMLInputElement>) {
    setCurColor(e.currentTarget.value);
  }

  console.log(curColor, curName, id);
  return (
    <form
      className="edit-car"
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
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};

export default EditCarForm;
