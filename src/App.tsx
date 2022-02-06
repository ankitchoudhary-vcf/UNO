import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Game from './Components/Game'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/play" element={<Game/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
