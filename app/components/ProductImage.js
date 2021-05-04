import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function ProductImage({ source }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("ImageScreen", { source })}
      style={styles.imageContainer}
    >
      <Image source={source} style={styles.image} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    elevation: 10,
    borderBottomRightRadius: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
