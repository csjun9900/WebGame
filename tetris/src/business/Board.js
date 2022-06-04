import React from "react";
import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, columns }) => {
  // Array.from = 얕은 복사를 통해 새로운 Array객체를 만든다.
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};

export const nextBoard = ({ board, player, resetPlayer, addLineCleared }) => {
  const { tetromino, position } = player;

  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape,
  });

  return {
    rows,
    size: { ...board.size },
  };
};
