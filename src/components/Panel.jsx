/* eslint-disable react/prop-types */
import React from "react";

export default function Panel({ name, children }) {
  return (
    <div className="panel">
      <div className="header">
        <p>{name}</p>
      </div>
      <div className="body">{children}</div>
    </div>
  );
}
