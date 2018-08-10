import React from 'react';
import styled from 'styled-components';

const StyledLanding = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  font-weight: lighter;
`;

const LandingSectionOne = styled.div`
  height: 100%;
  width: 50%;
  background-color: blue;
`;

const LandingSectionTwo = LandingSectionOne.extend`
  height: 100%;
  width: 50%;
  background-color: red !important;
`;

const Landing = () => {
  return (
    <StyledLanding>
      <LandingSectionOne>
        left
      </LandingSectionOne>
      <LandingSectionTwo>
        right
      </LandingSectionTwo>
    </StyledLanding>
  );
}

export default Landing;
