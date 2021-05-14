import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SellItemScreen from "../screens/SellItemScreen";
import RentItemScreen from "../screens/RentItemScreen";
import NewItemScreen from "../screens/NewItemScreen";
import { AuthContext } from "../context/auth";
import colors from "../config/colors";
import TitleBar from "../components/TitleBar";

const Stack = createStackNavigator();

const NewItemNavigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          height: 90,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="PickItem"
        component={NewItemScreen}
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
      <Stack.Screen name="Sell Your Item" component={SellItemScreen} />
      <Stack.Screen name="Rent Your Item" component={RentItemScreen} />
    </Stack.Navigator>
  );
};

export default NewItemNavigator;
