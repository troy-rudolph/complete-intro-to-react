import React from 'react'
import { render } from 'react-dom'
import {HashRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'

function FourOhFour() {
  return <h1>404</h1>;
}

function App() {
  return (
    <HashRouter>
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
    </HashRouter>
  );
};

export default App;
