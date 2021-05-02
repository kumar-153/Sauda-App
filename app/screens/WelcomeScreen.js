import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import CustomText from "../components/CustomText";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.backgroundSecondary,
          left: 50,
          top: 100,
          width: 300,
          height: 300,
        }}
      >
        <View
          style={{
            backgroundColor: colors.lightViolet,
            width: 100,
            height: 100,
            bottom: 0,
          }}
        ></View>
        <CustomText>Yo what are you doing?</CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
  },
});
