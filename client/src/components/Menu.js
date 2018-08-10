import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <button onClick={this.showMenu}>Show menu</button>

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
      </div>
    );
  }
}

export default DropDownMenu;
