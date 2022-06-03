import React, { useState, useMemo } from "react";
import styled from "styled-components";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;
  return (
    <UlDiv>
      <ul className="GameStats GameStats__right">
        <li>Level</li>
        <li className="value">{level}</li>
        <li>Lines to level</li>
        <li className="value">{linesToLevel}</li>
        <li>Points</li>
        <li className="value">{points}</li>
      </ul>
    </UlDiv>
  );
};

export default React.memo(GameStats);

const UlDiv = styled.div`
  .GameStats {
    position: absolute;
    width: 22vw;
    list-style-type: none;
    color: rgba(255, 255, 255, 0.5);
  }

  .GameStats__left {
    right: 0;
    top: 22vh;
    text-align: left;
  }

  .GameStats__right {
    right: 0;
    bottom: 10%;
    text-align: left;
  }

  .GameStats .value {
    font-size: 2.8rem;
    margin-bottom: 0.5em;
    color: rgba(255, 255, 255, 1);
  }
`;
