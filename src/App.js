
import './App.css';
// import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
// import { Route } from 'react-router-dom';
import Login from './components/LogIn';


function App() {



  return (
    <Router>
      <div className="App">
        < Navbar />
        <switch>
          <Route path="/LogIn">
          <Login/>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
