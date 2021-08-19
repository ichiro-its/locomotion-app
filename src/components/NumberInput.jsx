/* eslint-disable react/prop-types */
import React from "react";
import NumberField from "./NumberField";

export default function NumberInput({ name, value }) {
  return (
    <div className="number-input">
      <div className="input">
        <div className="label">{name}</div>
        <NumberField initialValue={value} />
      </div>
      <hr />
    </div>
  );
}
