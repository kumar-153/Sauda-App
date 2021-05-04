import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const ProductStack = createStackNavigator();

const ProductsNavigator = () => (
  <ProductStack.Navigator>
    <ProductStack.Screen name="ProductsScreen" component={ProductsScreen} />
    <ProductStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
    />
  </ProductStack.Navigator>
);

export default ProductsNavigator;
