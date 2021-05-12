import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, SafeAreaView } from "react-native";

function SafeScreen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f0f3f5",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default SafeScreen;
