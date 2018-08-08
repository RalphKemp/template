import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap/TweenMax';
import Modal from 'react-modal';

const authModalStyles = {
  content : {

  }
};

// https://github.com/reactjs/react-modal#demos

Modal.setAppElement('#root');

class Header extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

   openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#fff';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    const logo = document.getElementById('logo-display');

    const animate = () => {
      TweenMax.to('#F', 0.2, { left: 0 });
      TweenMax.to('#T', 0.2, { left: 0 });
      TweenMax.to('#O', 0.2, { opacity: 1 });
      TweenMax.to('#E', 0.2, { opacity: 1 });
    };

    const animateTwo = () => {
      TweenMax.to('#F', 0.2, { left: 21 });
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
          <li className="auth-modal" onClick={this.openModal}>
            Login
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={authModalStyles}
            >
              <button onClick={this.closeModal}>close</button>
              <a href="/auth/google">Login with Google</a>
              <a href="/auth/facebook">Login with Facebook</a>
            </Modal>
          </li>
        );
      default:
        return [
          <li key="1">
            <Link to={'dashboard'}>dashboard</Link>
          </li>,
          <li key="2">
            <Link to={'about'}>about</Link>
          </li>,
          <li key="3">
            <a href="/api/logout">logout</a>
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
