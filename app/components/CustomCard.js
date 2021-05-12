import React from "react";
import styled from "styled-components";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";

export default function CustomCard({ product }) {
  return (
    <Container style={{ elevation: 10 }}>
      <Cover>
        <CoverImage source={product.image} />
      </Cover>
      <Content>
        <Avatar source={product.ownerImage} />
        <Wrapper>
          <Title>{product.title}</Title>
          <Owner>{product.owner}</Owner>
        </Wrapper>
        <PriceTag>$ {product.price}</PriceTag>
      </Content>
    </Container>
  );
}

const Avatar = styled.Image`
  border-radius: 22px;
  width: 48px;
  height: 48px;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 70px;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 28px;
  font-weight: bold;
  left: 0;
`;

const Owner = styled.Text`
  color: black;
  font-size: 16px;
`;

const PriceTag = styled.Text`
  font-size: 24px;
  padding-right: 20px;
`;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  width: 80%;
  padding: 0 10px;
  justify-content: center;
`;
