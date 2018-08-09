import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  const StyledLogo = styled.div`
    position: relative;
    height: 65px;
    width: 150px;
    color: black;
    padding: 20px;
    text-align: center;
    font-size: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    font-weight: bold;
    > p {
      text-decoration: none;
      position: relative;
      margin: 1px;
    }
  `;

  return (
    <StyledLogo>
      <p id="F">F</p>
      <p id="O">O</p>
      <p id="R">R</p>
      <p id="G">G</p>
      <p id="E">E</p>
      <p id="T">T</p>
    </StyledLogo>
  );
}

export default Logo;


