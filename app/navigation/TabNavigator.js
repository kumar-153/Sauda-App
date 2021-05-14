import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainStackNavigator from "./MainStackNavigator";
import ProductsNavigator from "./ProductsNavigator";
import colors from "../config/colors";
import NewItemButton from "../components/NewItemButton";
import NewItemScreen from "../screens/NewItemScreen";
import NewItemNavigator from "./NewItemNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.white,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.gray,
      labelStyle: {
        fontSize: 14,
        fontWeight: "bold",
      },
      labelPosition: "beside-icon",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={ProductsNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name="feed" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="NewItem"
      component={NewItemNavigator}
      options={({ navigation }) => ({
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="camera-plus"
            size={size}
            color={color}
          />
        ),
        tabBarButton: () => (
          <NewItemButton onPress={() => navigation.navigate("NewItem")} />
        ),
      })}
    />
    <Tab.Screen
      name="Profile"
      component={MainStackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="user-alt" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
