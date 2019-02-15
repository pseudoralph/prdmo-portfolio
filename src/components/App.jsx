import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Error404 from './Error404';
import Contact from './Contact';
import Blog from './Blog';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/blog" components={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
