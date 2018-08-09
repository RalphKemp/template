import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';
import { ReactModalAdapter } from '../helpers/ReactModalAdapter';
import { animate } from '../helpers/LogoAnimation';

// styles
const HeaderDiv = styled.div`
  width: 100%;
  height: 65px;
  background-color: #f9f9f9;
  color: #262626;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    text-decoration: none;
  };
`;

const HeaderContentRight = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px !important;
  > a {
    text-decoration: none;
    font-size: 13px;
    margin: 5px;
    font-family: 'Work Sans', sans-serif;
    font-weight: lighter;
    margin-right: 10px;
    cursor: pointer;
    color: #262626;
  };
    & p:visited {
      color: #262626;
    };
    & p:hover {
      color: #a25151;
    };
`;

const AuthModalLi = styled.li`
  > p {
    text-decoration: none;
    font-size: 13px;
    margin: 5px;
    font-family: 'Work Sans', sans-serif;
    font-weight: lighter;
    margin-right: 20px;
    cursor: pointer;
    color: #262626;
  };
    & a :visited {
      color: #262626;
    };
`;

const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal',
  ReactModalPortal: 'ReactModalPortal',
  ReactModal__Overlay: 'ReactModal__Overlay'
})`
  .Modal {
    position: absolute;
    outline: none;
    border-radius: 10px;
    top: 12%;
    left: calc(50% - 100px);
    right: auto;
    bottom: auto;
    width: 200px;
    height: 144px;
    background-color: #e4e4e4;
    box-shadow: 1px 1px 5px 1px #cecece;
  };
  .Overlay {
    styles: here;
  };
  .ReactModalPortal > div {
    opacity: 0;
  };
  .ReactModalPortal {
    transition: opacity 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.15);
  };
  .ReactModal__Overlay {
    transition: opacity 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.15);
  };
  .ReactModalPortal '.ReactModal__Overlay--after-open' {
    opacity: 1 !important;
  };
  .ReactModalPortal '.ReactModal__Overlay--before-close' {
    opacity: 0 !important;
  }

`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  > * {
    text-align: center !important;
    line-height: 11px !important;
  };
  & a {
    font-family: "Work Sans", sans-serif;
    font-weight: lighter;
    text-decoration: none;
    color: white;
    font-size: 12px;
  };
  & > div {
    height: 43px !important;
    width: 80%;
  };
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: -13px;
  right: -14px;
  cursor: pointer;
  font-size: 16px;
  background-color: #848484;
  padding: 5px 10px;
  border-radius: 10px;
  outline: none !important;
  border: none;
  color: white;
`;


Modal.setAppElement('#root');

class Header extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    const logo = document.getElementById('logo-display');
    animate(logo);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <AuthModalLi>
            <p onClick={this.openModal}>Log in</p>
            <StyledModal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.handleCloseModal}
              openTimeoutMS={100}
              closeTimeoutMS={100}
            >
              <StyledModalCloseButton
                onClick={this.handleCloseModal}
              >
                <FontAwesomeIcon icon="times" color="white" size="sm" />
              </StyledModalCloseButton>

              <ModalContent>
                <FacebookLoginButton>
                  <a href="/auth/google">Facebook Log in</a>
                </FacebookLoginButton>
                <GoogleLoginButton>
                  <a href="/auth/facebook">Google Log in</a>
                </GoogleLoginButton>
              </ModalContent>

            </StyledModal>
          </AuthModalLi>
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
            <a href="/api/logout">log out</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <HeaderDiv>
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
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
          <HeaderContentRight>{this.renderContent()}</HeaderContentRight>
        </HeaderDiv>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
