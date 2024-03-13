import React from 'react';
import './App.css';
import { GridProvider } from './GridContext';
import Grid from './Grid';

function App() {
  return (
    <div className="App">
      <GridProvider>
        <Grid />
      </GridProvider>
    </div>
  );
}

export default App;
