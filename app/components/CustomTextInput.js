import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../config/colors";

export default function CustomTextInput(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    width: 295,
    height: 70,
    color: colors.darkGray,
    // marginBottom: 20,
    borderRadius: 10,
    elevation: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});
