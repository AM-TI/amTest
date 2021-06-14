import React from 'react'
import './scss/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DataCharacters } from './DataCharacters';
import { Elements } from './Elements';
import hpleters from './Assets/hpleters.png'
import { Btn } from './Components/Btn';
import { Staff } from './Staff';
import { Students } from './Students';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="App">
            <div className="fondo">
              <Elements />
              <img src={hpleters} alt="hpLeters" />
              <h2>Selecciona tu filtro</h2>
              <Btn />
              </div>
            <Route path='/staff'>
              <Staff />
            </Route>
            <Route path='/students'>
              <Students />
            </Route>
            <Route exact path='/'>
              <DataCharacters />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
