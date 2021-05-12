import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ImageScreen from "../screens/ImageScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          height: 90,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Product" component={ProductDetailsScreen} />
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
