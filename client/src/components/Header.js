import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return <div class="header-div">this is a tasty header</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
