import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About'
import Details from './pages/Details'
import Home from './pages/Home'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul>
        <Switch>

          <Route path="/about">
            <About/>
          </Route>
          <Route path="/details">
            <Details/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
