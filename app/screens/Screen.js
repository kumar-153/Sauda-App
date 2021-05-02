import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: "#252835",
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
