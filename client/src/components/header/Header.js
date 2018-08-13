import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledLogo from '../Logo';
import DropDownMenu from './Menu';
import { media } from '../../helpers/Sizing'
import AuthModal from './Modal';


const StyledMenuDivBig = styled.div`
  display: none;
  ${media.mid`
    display: flex;
  `};
`;

const StyledMenuDivSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mid`
    display: none;
  `};
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 60px;
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
  list-style: none !important;
  padding: 0px !important;
  margin-right: 20px;
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

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <AuthModal />
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
