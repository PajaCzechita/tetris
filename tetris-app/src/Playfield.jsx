import React from "react";
import "./playfield.css";

const fieldColumn = 10;
const fieldRow = 25;

export const PlayField = () => {
  const columns = (column) => {
    let col = [];

    for (let c = 0; c < column; c++) {
      col.push(<span key={c} className="one-square"></span>);
    }

    return col;
  };

  let playfield = [];

  for (let r = 0; r < fieldRow; r++) {
    playfield.push(
      <div key={r} className="row">
        {columns(fieldColumn)}
      </div>
    );
  }
  return <section className="playfield">{playfield}</section>;
};
