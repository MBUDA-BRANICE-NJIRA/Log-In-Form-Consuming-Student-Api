
import './App.css';
import React from 'react';
import { Router } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        < Navbar />
       <h1>Testing</h1>
      </div>
    </Router>
  );
}

export default App;
