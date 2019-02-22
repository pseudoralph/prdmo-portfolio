import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Blog from './Blog';
import Error404 from './Error404';
import { POSTS } from './posts';
// import Contact from './Contact';
// import Projects from './Projects';

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
            path="/blog"
            render={() => (
              <Blog
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
