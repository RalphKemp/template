import React, { Component } from 'react';
import Modal from 'react-modal';
import { ReactModalAdapter } from '../../helpers/ReactModalAdapter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { media } from '../../helpers/Sizing'
import styled from 'styled-components';

Modal.setAppElement('#root');

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

class AuthModal extends Component {
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

  render() {
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
  }
}

export default AuthModal;
