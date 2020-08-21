import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrera from './Components/Carrera/Carrera'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/carrera" component={Carrera}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
