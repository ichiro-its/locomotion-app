import React from "react";

export default function Panel(props) {
  return (
    <div className="panel">
      <div className="header">
        <p>{props.name}</p>
      </div>
      <div className="body">{props.children}</div>
    </div>
  );
}