/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function NumberField({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  const addValue = (val) => {
    setValue(value + val);
  };

  const subtractValue = (val) => {
    setValue(value - val);
  };

  const handleValueChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="number-field">
      <button onClick={() => subtractValue(10)}>-10</button>
      <button onClick={() => subtractValue(1)}>-1</button>
      <input type="number" value={value} onChange={handleValueChange} />
      <button onClick={() => addValue(1)}>+1</button>
      <button onClick={() => addValue(10)}>+10</button>
    </div>
  );
}
