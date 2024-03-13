import React, { useContext } from 'react';
import { GridContext } from './GridContext';

const Cell = ({ id }) => {
  const { cells, toggleCell } = useContext(GridContext);
  const cellClass = `cell ${cells[id] ? 'cell-on' : 'cell-off'}`;

  return <div className={cellClass} onClick={() => toggleCell(id)} />;
};

export default Cell;
