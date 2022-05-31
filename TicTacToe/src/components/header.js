import React from "react";
import styled from "styled-components";

const header = () => {
  return (
    <HeaderWrapper>
      <h1>왜 안뜨는 거야</h1>
    </HeaderWrapper>
  );
};

export default header;

const HeaderWrapper = styled.header`
  display: inline-block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border: 1px solid black;
  text-align: center;
`;
