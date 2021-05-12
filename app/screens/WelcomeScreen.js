import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

import CustomText from "../components/CustomText";
import colors from "../config/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomButton onPress={() => navigation.navigate("Register")}>
        Register
      </CustomButton>
      <CustomButton onPress={() => navigation.navigate("Login")}>
        Login
      </CustomButton>
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
