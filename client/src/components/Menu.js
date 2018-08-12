import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledMenuDiv = styled.div``;

const BurgerDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 24px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    position: absolute;
    top: 5px;
  }
`;

const ShowMenuDiv = styled.div`
  margin-top: 24px;
  position: absolute;
  right: 30px;
  top: 30px;
`;

const StyledDropDownItem = styled.li`
  padding: 6px;
  background-color: #ececec;
  & > a {
    font-size: 13px !important;
    text-align: left !important;
    color: black !important;
    display: inline-block;
    vertical-align: middle;
  }
`;

class DropDownMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <StyledMenuDiv>
        <BurgerDiv onClick={this.showMenu}>
          <FontAwesomeIcon icon="bars" color="black" size="lg" />
        </BurgerDiv>
        <ShowMenuDiv>
          {this.state.showMenu ? (
            <div
              className="menu"
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <StyledDropDownItem key="1">
                <Link to={'dashboard'}>dashboard</Link>
              </StyledDropDownItem>
              <StyledDropDownItem key="2">
                <Link to={'about'}>about</Link>
              </StyledDropDownItem>
              <StyledDropDownItem key="3">
                <a href="/api/logout">log out</a>
              </StyledDropDownItem>
            </div>
          ) : null}
        </ShowMenuDiv>
      </StyledMenuDiv>
    );
  }
}

export default DropDownMenu;
