import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import SafeScreen from "./SafeScreen";

function NewItemScreen({ navigation }) {
  return (
    <SafeScreen style={styles.container}>
      <CustomText style={styles.header}>Choose Your Mode</CustomText>
      <CustomButton onPress={() => navigation.navigate("Sell Your Item")}>
        Sell Your Item
      </CustomButton>
      <CustomButton onPress={() => navigation.navigate("Rent Your Item")}>
        Rent Your Item
      </CustomButton>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default NewItemScreen;
