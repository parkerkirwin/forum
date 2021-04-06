import './App.css';
import Home from './pages/Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Rules from './pages/Rules';
import FAQ from './pages/FAQ';
import DoesNotExist from './pages/DoesNotExist';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route >
            <Route exact path="/FAQ">
              <FAQ />
            </Route >
            <Route exact path="/Rules">
              <Rules />
            </Route >
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route path="*">
              <DoesNotExist />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;