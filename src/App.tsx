import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MapView from './components/MapView/index';

const App = function () {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/mapview" element={<MapView />} />
      </Routes>
    </>
  );
};

export default App;
