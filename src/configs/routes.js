import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';

class AppRoutes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </React.Fragment>
    );
  }
}

export default AppRoutes;
