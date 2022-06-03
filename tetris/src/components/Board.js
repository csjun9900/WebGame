import React from "react";
import styled from "styled-components";
import BoardCell from "./BoardCell";

const Board = ({ board }) => {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <Container style={boardStyles}>
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </Container>
  );
};

export default Board;

const Container = styled.div`
  position: relative;
  margin: auto;
  display: grid;
  grid-gap: 2px;
  width: 45vw;
  height: 90vh;
  background: rgb(32, 0, 64);
  border: 10px solid rgb(32, 0, 64);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
