import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Screen from "./Screen";
import ProductImage from "../components/ProductImage";
import CustomText from "../components/CustomText";

function ProductDetailsScreen({ title, price, rating, date }) {
  return (
    <Screen>
      <ProductImage source={require("../assets/prod-1.jpg")} />
      <View style={styles.header}>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.price}>$ {price}</CustomText>
      </View>
      <View style={styles.header}>
        <CustomText style={styles.rating}>{rating}</CustomText>
        <CustomText style={styles.date}>{date}</CustomText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 18,
    marginTop: 18,
    marginRight: 18,
    marginBottom: 0,
    padding: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    marginRight: 60,
    fontWeight: "bold",
  },
  date: {
    marginRight: 40,
  },
});

export default ProductDetailsScreen;
