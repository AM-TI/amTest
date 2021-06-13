import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DataCharacters} from './DataCharacters'
import {Staff} from './Staff'
import {Students} from './Students'

function App() {
  return (
    <>
    <Router>
      <Switch>
      <div className="App">
        <h1>Harry Potter</h1>
        <h2>Selecciona tu filtro</h2>
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
