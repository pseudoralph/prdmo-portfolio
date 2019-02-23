import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Vignette from './Vignette';
import Error404 from './Error404';
import { POSTS } from './posts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentDb: POSTS
    };
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                content={this.state.contentDb.filter(
                  post => post.postId === 'INTRO'
                )}
              />
            )}
          />

          <Route
            path="/vignette"
            render={() => (
              <Vignette
                content={this.state.contentDb.filter(
                  post => post.postId != 'INTRO'
                )}
              />
            )}
          />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
