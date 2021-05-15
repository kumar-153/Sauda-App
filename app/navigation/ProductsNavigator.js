import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import TitleBar from "../components/TitleBar";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import colors from "../config/colors";
import ViewImageScreen from "../components/ViewImageScreen";

const ProductStack = createStackNavigator();

const ProductsNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          height: 90,
        },
      }}
    >
      <ProductStack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          headerTitle: (props) => (
            <TitleBar
              {...props}
              name={user ? user.firstName : null}
              userAvatar={user ? user.avatar : null}
            />
          ),
          headerLeft: null, // remove the back button
        }}
      />
      <ProductStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen
        name="ImageScreen"
        component={ViewImageScreen}
        options={{ headerShown: false }}
      />
    </ProductStack.Navigator>
  );
};

export default ProductsNavigator;
