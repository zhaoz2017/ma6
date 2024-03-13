import React, { useContext } from 'react';
import Cell from './Cell';
import { GridContext } from './GridContext';

const Grid = () => {
  const { countOnCells } = useContext(GridContext);

  return (
    <div className="grid-wrapper">
      <div className="counter">Count: {countOnCells}</div>
      <div className="grid-container">
        <Cell id={0} />
        <Cell id={1} />
        <Cell id={2} />
        <Cell id={3} />
      </div>
    </div>
  );
};

export default Grid;
