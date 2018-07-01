import React from 'react';
import { render } from 'react-dom';
import {HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

function FourOhFour() {
  return <h1>404</h1>;
}

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className='app'>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={(props) => <Search shows={preload.shows} {...props} />} />
            <Route path="/details/:id" component={(props) => {
                              const selectedShow = preload.shows.find((show) => props.match.params.id === show.imdbID)
                              return <Details show={selectedShow} />
                            }}
             />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Provider>
    </HashRouter>
  );
};


export default App;
