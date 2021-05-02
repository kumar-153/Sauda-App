import React from "react";
import Screen from "../screens/Screen";
import { View, StyleSheet } from "react-native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";

export default function TestScreen() {
  return (
    <Screen style={styles.container}>
      <View
        style={{ backgroundColor: "#2f3546", padding: 30, borderRadius: 20 }}
      >
        <CustomText style={styles.text}>Hello World</CustomText>
        <CustomButton style={{ width: "50%" }}>Test it</CustomButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    fontSize: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252835",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
