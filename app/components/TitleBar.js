import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

function TitleBar({ name, userAvatar }) {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {userAvatar && <Avatar source={userAvatar} />}
      </TouchableOpacity>
      <Wrapper>
        <Title>Welcome Back,</Title>
        {name && <Name>{name}</Name>}
      </Wrapper>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={colors.primaryHighlight}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => alert("Notifications Displayed")}
      >
        <Ionicons name="notifications" size={32} color="white" />
      </TouchableHighlight>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  /* background-color: #f0f3f5; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.View`
  flex: 1;
  margin-left: 20px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export default TitleBar;
