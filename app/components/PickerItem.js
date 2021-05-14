import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText style={styles.text}>{label}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
