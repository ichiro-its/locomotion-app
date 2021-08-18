/* eslint-disable react/prop-types */
import React from "react";
import NumberInput from "./NumberInput";

export default function Category({ fields }) {
  return (
    <div className="category">
      <div className="category-body">
        {Object.keys(fields).map((fieldKey, i) => (
          <NumberInput name={fieldKey} value={fields[fieldKey]} key={i} />
        ))}
      </div>
    </div>
  );
}
