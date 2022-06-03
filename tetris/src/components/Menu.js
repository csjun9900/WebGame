import React from "react";
import styled from "styled-components";

const Menu = ({ onClick }) => {
  return (
    <Container>
      <StartBtn onClick={onClick}>Play Tetris</StartBtn>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  z-index: 100;
`;

const StartBtn = styled.button`
  font-size: 26px;
  padding: 40px 80px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 60px;

  &:hover {
    opacity: 0.9;
  }
`;
