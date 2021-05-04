import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ImageScreen from "../screens/ImageScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Product" component={ProductDetailsScreen} />
    <Stack.Screen name="ImageScreen" component={ImageScreen} />
  </Stack.Navigator>
);

export default MainStackNavigator;
