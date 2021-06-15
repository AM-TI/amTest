import React from 'react'
import styles from './scss/App.module.scss'
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
          <div className={styles.App}>
            <div className={styles.fondo}>
              <Elements />
              <img className={styles.hp} src={hpleters} alt="hpLeters" />
              <h1>Selecciona tu filtro</h1>
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
