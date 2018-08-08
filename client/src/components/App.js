import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import About from './About';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return(
      <div id="main-container">
        <BrowserRouter>
          <div id="sub-container">
            <Header />
            <Route exact path="/" component={this.props.auth ? Dashboard : Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
