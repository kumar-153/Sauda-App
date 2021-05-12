import React from "react";
import styled from "styled-components";

export default function ErrorMessage({ error, visible }) {
  return <Container>{error && visible && <Error>{error}</Error>}</Container>;
}

const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
  margin-left: 100px;
`;

const Error = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;
