import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import colors from "../config/colors";
import YourOrdersScreen from "../screens/YourOrdersScreen";
import TitleBar from "../components/TitleBar";
import { AuthContext } from "../context/auth";
import YourPostsScreen from "../screens/YourPostsScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          height: 90,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={HomeScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen
        name="Your Orders"
        options={{
          headerTitle: (props) => (
            <TitleBar
              {...props}
              name={user ? user.firstName : null}
              userAvatar={user ? user.avatar : null}
            />
          ),
          headerLeft: null,
        }}
        component={YourOrdersScreen}
      />
      <Stack.Screen
        name="Your Posts"
        options={{
          headerTitle: (props) => (
            <TitleBar
              {...props}
              name={user ? user.firstName : null}
              userAvatar={user ? user.avatar : null}
            />
          ),
          headerLeft: null,
        }}
        component={YourPostsScreen}
      />
      <Stack.Screen name="Product" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
