import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import CustomCard from "../components/CustomCard";
import styled from "styled-components";
import { products } from "../config/data";

export default function ProductsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <Header>Discover Products...</Header>
        {products.map((product, idx) => (
          <TouchableOpacity
            key={idx}
            style={{ padding: 10 }}
            onPress={() => navigation.navigate("ProductDetails", product)}
          >
            <CustomCard product={product} />
          </TouchableOpacity>
        ))}
        <Padding>No more results....</Padding>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = styled.Text`
  font-weight: bold;
  padding: 30px 0 0 30px;
  font-size: 30px;
`;

const Padding = styled.Text`
  font-size: 18px;
  font-weight: 300;
  padding: 20px;
`;
