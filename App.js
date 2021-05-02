import React from "react";
import Screen from "./app/screens/Screen";
import { View, StyleSheet } from "react-native";
import CustomText from "./app/components/CustomText";
import CustomButton from "./app/components/CustomButton";
import ProductDetailsScreen from "./app/screens/ProductDetailsScreen";

export default function App() {
  return (
    <ProductDetailsScreen
      title="Product Title"
      price="30.00"
      date="Fri, April 2020"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    fontSize: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252835",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
