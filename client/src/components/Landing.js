import React from 'react';
import styled from 'styled-components';
import { media } from '../helpers/Sizing';

const StyledLanding = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-weight: lighter;
  ${media.tablet`
    flex-direction: row;
  `};
`;

const LandingSectionOne = styled.div`
  height: 100%;
  width: 100%;
  background-color: #363d2f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @font-face {
    font-family: 'Permanent Marker';
    font-style: normal;
    font-weight: 400;
    src: local('Permanent Marker Regular'), local('PermanentMarker-Regular'),
      url(https://fonts.gstatic.com/s/permanentmarker/v7/Fh4uPib9Iyv2ucM6pGQMWimMp004La2Cf5b6jlg.woff2)
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  & > div {
    width: 250px;
    height: auto;
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
      width: 400px;
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
  `}

  ${media.tablet`
    & > div {
      width: 400px;
      height: auto;
    }
    & > div div:first-child {
      font-size: 3em;
      margin-bottom: 20px;
      line-height: 0.98;
    }
    & div:last-child {
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
          <div>ONE WEEK AT A TIME.</div>
          <div>
            frgt is an app to note things down.<br />Simple, no? And it's free.
            Hoorah.
          </div>
        </div>
      </LandingSectionOne>
      <LandingSectionTwo>
        <div />
      </LandingSectionTwo>
    </StyledLanding>
  );
};

export default Landing;
