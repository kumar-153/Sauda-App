import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductImage({ source }) {
  return (
    <View>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    borderBottomRightRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 20,
      height: 20,
    },
  },
});
