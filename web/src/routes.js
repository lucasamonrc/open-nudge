import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hub from './pages/Hub';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewProject from './pages/NewProject';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Hub} />
        <Route path="/logon" component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/projects/new" component={NewProject} />
      </Switch>
    </BrowserRouter>
  );
}