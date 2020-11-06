import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilterPanel from "./components/FilterPanel/FilterPanel";
import NaryadPanel from "./components/NaryadPanel/NaryadPanel";
import Maps from "./components/Maps/Maps";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FilterPanel />
    <NaryadPanel />
    <Maps />
  </React.StrictMode>,
  document.getElementById('root')
);