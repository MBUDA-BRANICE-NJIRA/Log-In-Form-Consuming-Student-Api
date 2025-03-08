
import './App.css';
import React from 'react';
import { Router } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Router>
      <div className="App">
        < Navbar />

      </div>
    </Router>
  );
}

export default App;
