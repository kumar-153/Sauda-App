import React from "react";
import styled from "styled-components";

export default function Logo() {
  return <LogoImg source={require("../assets/logo.png")} />;
}

const LogoImg = styled.Image`
  width: 200px;
  height: 80px;
  position: absolute;
  top: 10px;
`;
