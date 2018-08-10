import React from 'react';
import styled from 'styled-components';
import { sizes, media } from '../helpers/Sizing';

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
  ${media.tablet`
    flex-direction: row;
  `};
`;

const LandingSectionOne = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
`;

const LandingSectionTwo = LandingSectionOne.extend`
  height: 100%;
  width: 100%;
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
