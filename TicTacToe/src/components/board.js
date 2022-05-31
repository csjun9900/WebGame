import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

const Board = () => {
  const [turn, setTurn] = useState("X");
  const [tic, setTic] = useState(Array(9).fill("-"));
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    let combos = {
      across: [
        // 가로체크
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        // 세로체크
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      cross: [
        // 대각선체크
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      // 승부판정
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "-" || // 가로체크 배열 중 빈공간이 있는지 체크
          squares[pattern[1]] === "-" || // 세로체크
          squares[pattern[2]] === "-" // 대각선체크
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] && // 교차하는 부분 체크
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const nextTurn = (i) => {
    // 버튼선택과 차례넘김
    if (tic[i] !== "-") {
      alert("이미 선택된 칸입니다");
      return;
    }

    let squares = [...tic];

    if (turn === "X") {
      squares[i] = "X";
      setTurn("O");
    } else {
      squares[i] = "O";
      setTurn("X");
    }

    console.log("Turn :" + turn);
    console.log(squares);

    checkWinner(squares);
    setTic(squares);
  };

  return (
    <BoardWrapper>
      <h2>Turn : {turn}</h2>
      <Grid container spacing={0}>
        {tic.map((v, i) => (
          <GridDiv xs={4} key={i} onClick={() => nextTurn(i)}>
            {v}
          </GridDiv>
        ))}
      </Grid>
      {winner && (
        <>
          <p>승자 : {winner}</p>
          <button onClick={() => setTic(Array(9).fill("-"))}>다시하기</button>
        </>
      )}
    </BoardWrapper>
  );
};

export default Board;

const BoardWrapper = styled("div")({
  width: "600px",
  height: "600px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
});

const GridDiv = styled(Grid)({
  display: "inline-block",
  width: "200px",
  height: "200px",
  border: "1px solid black",
  fontSize: 26,
  lineHeight: 8,
});
