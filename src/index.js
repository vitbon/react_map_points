import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilterPanel from "./components/FilterPanel/FilterPanel";
import NaryadPanel from "./components/NaryadPanel/NaryadPanel";
// import Map from "./components/Map/Map.jsx"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FilterPanel />
    <NaryadPanel />
    {/* <Map /> */}
  </React.StrictMode>,
  document.getElementById('root')
);