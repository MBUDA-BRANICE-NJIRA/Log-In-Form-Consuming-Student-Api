
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/LogIn';
import Registercompo from './components/Register';
import Tablecompo from './components/AllStudentTable';
// import 'bootstrap/dist/css/bootstrap.min.css';

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

          <Route path='/AllStudentTable'>
          <Tablecompo />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
