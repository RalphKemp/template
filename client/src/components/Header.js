import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';
import { ReactModalAdapter } from '../helpers/ReactModalAdapter';
import { animateIn, animateOut } from '../helpers/LogoAnimation';
import StyledLogo from './Logo';
import DropDownMenu from './Menu';
import { media } from '../helpers/Sizing'


const StyledMenuDivBig = styled.div`
  display: none;
  ${media.mid`
    display: flex;
  `};
`;

const StyledMenuDivSmall = styled.div`
  display: flex;
  ${media.mid`
    display: none;
  `};
`;

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
  }
`;

//logout
const HeaderContentRight = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px !important;
  & a {
    text-decoration: none;
    font-size: 13px;
    margin: 5px;
    font-family: 'Work Sans', sans-serif;
    font-weight: lighter;
    margin-right: 10px;
    cursor: pointer;
    color: #262626;
  }
  & a:hover {
    color: #a25151;
  }
  ${media.desktop`
    & a {
      font-size: 15px;
    };
  `};
`;

// login
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
  }
  & a :visited {
    color: #262626;
  }
  ${media.desktop`
    & p {
      font-size: 15px;
    };
  `};
`;

const StyledModal = styled(ReactModalAdapter).attrs({
  modalClassName: 'Modal'
})`
  .Modal {
    position: absolute;
    outline: none;
    border-radius: 10px;
    top: 12%;
    right: calc(50% - 100px);
    left: auto;
    bottom: auto;
    width: 200px;
    height: 144px;
    background-color: #e4e4e4;
    box-shadow: 1px 1px 5px 1px #cecece;
  }

  .ReactModal__Overlay {
    opacity: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  ${media.mobilePlus`
    .Modal {
      top: 53px;
      right: 20px;
    }
  `};
`;

// modalcontent
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
  }
  & a {
    font-family: 'Work Sans', sans-serif;
    font-weight: lighter;
    text-decoration: none;
    color: white;
    font-size: 12px;
  }
  & > div {
    height: 43px !important;
    width: 80%;
  }
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: -13px !important;
  right: -14px !important;
  cursor: pointer;
  font-size: 16px;
  background-color: #848484;
  padding: 5px 10px;
  border-radius: 10px;
  outline: none !important;
  border: none;
  color: white;
  max-width: 30px !important;
  max-height: 28px !important;
  display: flex;
  justify-content: center;
  align-items: items;
  ${media.mobilePlus`
    top: -12px !important;
    left: -15px !important;
  `};
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

  // componentDidMount() {
  //   const logo = document.getElementById('logo-display');
  //   animate(logo);
  // }

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
              closeTimeoutMS={100}
            >
              <StyledModalCloseButton onClick={this.handleCloseModal}>
                <FontAwesomeIcon icon="times" color="white" size="sm" />
              </StyledModalCloseButton>

              <ModalContent>
                <FacebookLoginButton>
                  <a href="/auth/facebook">Facebook Log in</a>
                </FacebookLoginButton>
                <GoogleLoginButton>
                  <a href="/auth/google">Google Log in</a>
                </GoogleLoginButton>
              </ModalContent>
            </StyledModal>
          </AuthModalLi>
        );
      default:
        return (
          <div>
            <StyledMenuDivBig big>
              <li key="1">
                <Link to={'dashboard'}>dashboard</Link>
              </li>
              <li key="2">
                <Link to={'about'}>about</Link>
              </li>
              <li key="3">
                <a href="/api/logout">log out</a>
              </li>
            </StyledMenuDivBig>

            <StyledMenuDivSmall>
              <DropDownMenu />
            </StyledMenuDivSmall>
          </div>
        );
    }
  }

  render() {
    return (
      <nav>
        <HeaderDiv>
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            onMouseOver={animateIn}
            onMouseOut={animateOut}
          >
            <StyledLogo />
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
