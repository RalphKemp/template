import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDashboard = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  font-weight: lighter;
`;


class Dashboard extends Component {
  render() {
    return (
      <StyledDashboard>
        this is the dashboard!
      </StyledDashboard>
    );
  }
}

export default Dashboard;
