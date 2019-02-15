import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
