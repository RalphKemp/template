import React from 'react';
import styled from 'styled-components';

const StyledLanding = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  font-weight: lighter;
`;

const Landing = () => {
  return (
    <StyledLanding>
      this is a lovely landing page!!!
    </StyledLanding>
  );
}

export default Landing;
