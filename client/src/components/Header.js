import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap/TweenMax';

class Header extends Component {
  componentDidMount() {
    const logo = document.getElementById('logo-display');

    const animate = () => {
      TweenMax.to('#F', 0.2, { left: 0 });
      TweenMax.to('#T', 0.2, { left: 0 });
      TweenMax.to('#O', 0.2, { opacity: 1 });
      TweenMax.to('#E', 0.2, { opacity: 1 });
    };

    const animateTwo = () => {
      TweenMax.to('#F', 0.2, { left: 20 });
      TweenMax.to('#T', 0.2, { left: -18 });
      TweenMax.to('#O', 0.2, { opacity: 0 });
      TweenMax.to('#E', 0.2, { opacity: 0 });
    };

    logo.addEventListener('mouseover', animate);
    logo.addEventListener('mouseout', animateTwo);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <a href="/">posts</a>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="header-div">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="header-content-left"
          >
            <div id="logo-display">
              <p id="F">F</p>
              <p id="O">O</p>
              <p id="R">R</p>
              <p id="G">G</p>
              <p id="E">E</p>
              <p id="T">T</p>
            </div>
          </Link>
          <ul className="header-content-right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);