import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import CustomCard from "../components/CustomCard";
import styled from "styled-components";

const products = [
  {
    id: 1,
    type: "rent",
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 2,
    type: "sale",
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 3,
    type: "rent",
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 4,
    type: "rent",
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 5,
    type: "sale",
    title: "iPhone X",
    image: require("../assets/prod-1.jpg"),
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
];

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
