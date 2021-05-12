import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import CustomCard from "../components/CustomCard";
import styled from "styled-components";

const products = [
  {
    id: 1,
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
  },
  {
    id: 1,
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
  },
  {
    id: 1,
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
  },
  {
    id: 1,
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
  },
  {
    id: 1,
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
  },
];

export default function ProductsScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        {products.map((product, idx) => (
          <TouchableOpacity
            key={idx}
            style={{ padding: 10 }}
            onPress={() => alert("You buy")}
          >
            <CustomCard product={product} />
          </TouchableOpacity>
        ))}
        <Padding>No more results....</Padding>
      </ScrollView>
    </SafeAreaView>
  );
}

const Padding = styled.Text`
  font-size: 18px;
  font-weight: 300;
  padding: 20px;
`;
