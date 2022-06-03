import React, { useState, useCallback } from "react";

export const useGameOver = () => {
  const [useGameOver, setGameOver] = useState(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  });

  return [useGameOver, setGameOver, setGameOver];
};
