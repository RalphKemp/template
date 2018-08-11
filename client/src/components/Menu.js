import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledMenuDiv = styled.div`

`;

const BurgerDiv = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
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
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <StyledMenuDiv>
        <BurgerDiv onClick={this.showMenu}>
          <FontAwesomeIcon icon="bars" color="black" size="1x" />
        </BurgerDiv>
        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <li key="1">
              <Link to={'dashboard'}>dashboard</Link>
            </li>
            <li key="2">
              <Link to={'about'}>about</Link>
            </li>
            <li key="3">
              <a href="/api/logout">log out</a>
            </li>
          </div>
        ) : null}
      </StyledMenuDiv>
    );
  }
}

export default DropDownMenu;
