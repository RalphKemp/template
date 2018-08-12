import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import About from './About';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import { media } from '../helpers/Sizing';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faKey,
  faTimes,
  faBars
} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faTimes, faBars);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  async componentDidMount() {
    await this.props.fetchUser();
    this.setState({ loaded: true });
  }

  MyCodeLoader() {
    const StyledLoader = styled.div`
      width: 100vw;
      height: calc(100vh - 460px);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f9f9f9;
      & > * {
        width: 135px;
        margin-top: 20%;
        ${media.mid`
          width: 160px;
        `};
        ${media.tablet`
          margin-top: 8%;
          width: 200px;
        `};
        ${media.desktop`
          font-size: 210px;
          margin-top: 16%;
        `};
      }
    `;

    return (
      <StyledLoader>
        <ContentLoader
          height={160}
          width={245}
          speed={0.9}
          primaryColor="#ebebeb"
          secondaryColor="#d3d3d3"
        >
          <circle cx="10" cy="20" r="8" />
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="50" r="8" />
          <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="80" r="8" />
          <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="110" r="8" />
          <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>
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
      <div>
        <BrowserRouter>
          <div id="sub-container">
            <Header />
            {this.state.loaded ? this.renderRoutes() : this.MyCodeLoader()}
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
