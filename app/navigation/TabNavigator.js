import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainStackNavigator from "./MainStackNavigator";
import ProductsNavigator from "./ProductsNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={MainStackNavigator} />
    <Tab.Screen name="Profile" component={ProductsNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;
