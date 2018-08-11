import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import About from './About';
import styled from 'styled-components';
import { Code } from 'react-content-loader';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faTimes, faBars);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  async componentWillMount() {
    await this.props.fetchUser();
    this.setState({ loaded: true });
  }

  MyCodeLoader() {
    const StyledLoader = styled.div`
      width: 100vw;
      height: calc(100vh - 60px);
      display: flex;
      justify-content: center;
      align-items: center;
      & > * {
        margin-left: 100px;
        width: 100%;
        height: auto;
        color: #c6c6c6;
      }
    `;

    return (
      <StyledLoader>
        <Code />
      </StyledLoader>
    );
  }

  renderRoutes() {
    return (
      <div>
        <Route
          exact
          path="/"
          component={this.props.auth ? Dashboard : Landing}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }

  render() {
    return (
      <div id="main-container">
        <BrowserRouter>
          <div id="sub-container">
            <Header />
            {this.state.loaded ? this.renderRoutes() : this.MyCodeLoader() }
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
