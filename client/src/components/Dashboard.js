import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../helpers/Sizing';

const StyledDashboard = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Work Sans', sans-serif;
  font-weight: lighter;
  ${media.tablet`
    flex-direction: row;
  `};
`;

const StyledToDoList = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
`;

const StyledCompletedToDoList = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
`;

class Dashboard extends Component {
  render() {
    return (
      <StyledDashboard>
        <StyledToDoList>

        </StyledToDoList>
        <StyledCompletedToDoList>

        </StyledCompletedToDoList>
      </StyledDashboard>
    )
  }
}

export default Dashboard;
