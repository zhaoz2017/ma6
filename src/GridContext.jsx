import React, { createContext, useState, useContext } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [cells, setCells] = useState({ 0: false, 1: false, 2: false, 3: false });

  const toggleCell = (id) => {
    setCells((prevCells) => ({ ...prevCells, [id]: !prevCells[id] }));
  };

  const countOnCells = Object.values(cells).filter((val) => val).length;

  return (
    <GridContext.Provider value={{ cells, toggleCell, countOnCells }}>
      {children}
    </GridContext.Provider>
  );
};
