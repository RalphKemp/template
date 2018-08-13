import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/Sizing';
import AuthSignUpModal from './header/SignUpModal';

const StyledLanding = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  font-weight: lighter;
  ${media.tablet`
    flex-direction: row;
  `};
`;

const StyledSignUpButton = styled.div`
  width: 75px;
  height: 30px;
  background-color: #5b5b5b;
  padding: 5px;
  color: #f9f9f9;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
  list-style: none;
  display: flex;
  align-items: center;
  p {
    color: #f9f9f9;
  }
  :hover {
    background-color: #c59c9c;
  }
  ${media.tablet`
    width: 83px;
  `};
  & > * p {
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    font-size: 15px;
    margin: none !important;
    ${media.tablet`
      font-size: 17px;
    `};
  }
`;

const LandingSectionOne = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @font-face {
    font-family: 'Permanent Marker';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/permanentmarker/v7/Fh4uPib9Iyv2ucM6pGQMWimMp004La2Cf5b6jlg.woff2)
      format('woff2');
  }
  & > div {
    height: auto;
    & > * {
      margin: 12px 0px;
    }
  }
  & > div div:first-child {
    font-size: 2.1em;
    text-align: left;
    margin-bottom: 10px;
    font-family: 'Permanent Marker', cursive;
    line-height: 0.98;
  }
  & div:last-child {
    font-size: 15px;
  }
  ${media.mid`
    & > div {
      height: auto;
    }
    & > div div:first-child {
      font-size: 2.4em;
      margin-bottom: 20px;
      line-height: 0.98;
    }
    & div:last-child {
      font-size: 21px;
    }
  `} ${media.tablet`
    & > div {
      height: auto;
    }
    & > div div:first-child {
      font-size: 3em;
      margin-bottom: 20px;
      line-height: 0.98;
    }
    & div:last-child {
      margin-top: 15px !important;
      font-size: 20px;
    }
  `};
`;

const LandingSectionTwo = styled.div`
  height: 100%;
  width: 100%;
  background-color: #cdbcbc !important;
  color: black !important;
`;


const Landing = () => {
  return (
    <StyledLanding>
      <LandingSectionOne>
        <div>
          <StyledSignUpButton>
            <AuthSignUpModal />
          </StyledSignUpButton>
        </div>
      </LandingSectionOne>
      <LandingSectionTwo>
        <div />
      </LandingSectionTwo>
    </StyledLanding>
  );
};

export default Landing;
