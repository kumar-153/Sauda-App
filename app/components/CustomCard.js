import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomCard({ product }) {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        {product.image && <Image source={product.image} style={styles.image} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  image: {
    width: "100%",
    height: "30%",
  },
});
