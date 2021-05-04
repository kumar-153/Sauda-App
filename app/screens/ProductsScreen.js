import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeScreen from "./SafeScreen";
import CustomCard from "../components/CustomCard";

const products = [
  {
    id: 1,
    title: "iPhone X",
    image: "../assets/prod-1.jpg",
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
  },
];

export default function ProductsScreen() {
  return (
    <SafeScreen>
      {products.map((idx, product) => (
        <CustomCard key={idx} product={product} />
      ))}
    </SafeScreen>
  );
}

const styles = StyleSheet.create({});
