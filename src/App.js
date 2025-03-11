
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/LogIn';
import Registercompo from './components/Register';

function App() {

  return (
    <Router>
      <div className="App">
        < Navbar />
        <Switch>

          <Route path="/LogIn">
          <Login/>

          </Route>
          <Route path='/register'>
          <Registercompo/>
          </Route>

          <Route path='/table'>
        
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
