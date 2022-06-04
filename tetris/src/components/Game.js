import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Tetris from "./Tetris";
import { useGameOver } from "../hooks/useGameOver";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
  };

  return (
    <Container>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  // display: block;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // width: 700px;
  // height: 700px;
  // border: 1px solid grey;
`;
