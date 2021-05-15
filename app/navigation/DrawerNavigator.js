import React, { useEffect } from "react";
import * as firebase from "firebase";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import DrawerContent from "../components/DrawerContent";
import CustomButton from "../components/CustomButton";
import { getUserInfo } from "../utils/user";
import YourOrdersScreen from "../screens/YourOrdersScreen";
import YourPostsScreen from "../screens/YourPostsScreen";

const Drawer = createDrawerNavigator();

const SignOut = ({ onPress }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <CustomButton onPress={onPress}>Log Out</CustomButton>
  </View>
);

const DrawerNavigator = ({ navigation }) => {
  const { updateUser, logout } = useContext(AuthContext);
  const currentUserUID = firebase.auth().currentUser?.uid;

  useEffect(() => {
    getUserInfo(currentUserUID).then((user) => {
      if (user) {
        updateUser(user);
      }
    });
  }, []);
  return (
    <Drawer.Navigator
      intialRoute="Feed"
      // drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={TabNavigator} />
      <Drawer.Screen name="Your Orders" component={YourOrdersScreen} />
      <Drawer.Screen name="Your Posts" component={YourPostsScreen} />
      {/* <Drawer.Screen name="SignIn" component={SignInScreen} /> */}
      {/* <Drawer.Screen name="SignUp" component={SignUpScreen} /> */}
      <Drawer.Screen name="LogOut">
        {() => <SignOut onPress={() => logout()} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
