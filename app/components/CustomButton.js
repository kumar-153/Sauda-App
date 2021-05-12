import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import text from "../config/text";
import CustomText from "./CustomText";

export default function CustomButton({ children, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <CustomText style={styles.text}>{children}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    margin: 10,
    top: 30,
    padding: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 20,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
