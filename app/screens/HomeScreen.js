import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";

function HomeScreen() {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default HomeScreen;
