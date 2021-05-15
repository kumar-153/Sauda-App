import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

import CustomText from "../components/CustomText";
import colors from "../config/colors";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash-1.png")}
        style={styles.image}
      >
        <View style={styles.overlay}></View>
        <View style={styles.boxed}>
          <CustomText style={styles.header}>Sauda</CustomText>
          <CustomText style={styles.subtitle}>
            Your one stop to Sell/Buy/Rent Items in IITJ
          </CustomText>
          <CustomButton onPress={() => navigation.navigate("Register")}>
            Register
          </CustomButton>
          <CustomButton onPress={() => navigation.navigate("Login")}>
            Login
          </CustomButton>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.backgroundPrimary,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  boxed: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
  },
  overlay: {
    // position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    zIndex: 50,
    opacity: 0.6,
  },
  header: {
    color: colors.white,
    fontSize: 72,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 200,
  },
});
