import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/projects" component={Projects} />

        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
