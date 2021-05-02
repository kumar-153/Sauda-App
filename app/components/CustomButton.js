import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import text from "../config/text";
import CustomText from "./CustomText";

export default function CustomButton({ children, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <CustomText style={styles.text}>{children}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    margin: 20,
    top: 30,
    padding: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: colors.textPrimary,
    fontWeight: "bold",
    fontSize: 20,
  },
});
