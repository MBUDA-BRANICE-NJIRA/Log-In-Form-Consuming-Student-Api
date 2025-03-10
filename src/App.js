
import './App.css';
import React from 'react';
import {BrowserRouter as Router, } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import LoginRegister from './components/LogIn';


function App() {
  return (
    <Router>
      <div className="App">
        < Navbar />
        {/* <switch>
          <Route path="LogIn">
          <LoginRegister />
          </Route>
        </switch> */}
      </div>
    </Router>
  );
}

export default App;
