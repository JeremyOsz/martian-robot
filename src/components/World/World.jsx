import React, { useEffect, useState } from "react";
import { WorldContainer, Cell } from "./World.style";

const World = ({ limitX, limitY, Robots }) => {
  const [rows, setRows] = useState();

  useEffect(() => {
  }, [Robots, limitX, limitY]);

  const createRows = (qty, cols) => {
    const rows = [];
    for (let i = 0; i < qty; i++) {
      rows.push(<div key={i}>{createCells(cols, i)}</div>);
    }
    return rows;
  };

  const createCells = (qty, row) => {
    const cells = [];
    for (let i = 0; i < qty; i++) {
      cells.push(<Cell key={i} id={`${row}${i}`}></Cell>);
    }
    return cells;
  };

  return (
    <WorldContainer data-testid="world-wrapper">
      {createRows(limitX, limitY)}
    </WorldContainer>
  );
};

export default World;
