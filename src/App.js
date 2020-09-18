import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Content from './Content';
import Feed from './Feed';
import Widget from './Widget';
import Explore from './Explore';


/**
 * 
 */
function App() {

  return (
    <Router>



      <div className="app">

        {/* Sidebar */}
        <Sidebar />

        <Switch>
          
          <Route path="/search">
            <Explore />
          </Route>
          <Route path="/jfskdjfk">
            <Feed />
          </Route>
          <Route path="/fsdfks">
            <Feed />
          </Route>
          <Route path="/ksdkjfsk">
            <Feed />
          </Route>
          

          <Route path="/home">
            <Feed />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>

        {/*Widget*/}
        <Widget />


      </div>
    </Router>
  );
}

export default App;
