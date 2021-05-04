import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import SafeScreen from "./SafeScreen";

export default function ImageScreen({ route }) {
  const { source } = route.params;
  return (
    <SafeScreen style={{ width: "100%" }}>
      <Image
        source={source}
        style={{ flex: 1, alignSelf: "center" }}
        resizeMode="contain"
      />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({});
