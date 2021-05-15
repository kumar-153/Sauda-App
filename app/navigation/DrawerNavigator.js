import React, { useEffect } from "react";
import * as firebase from "firebase";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { Alert, ImageBackground, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import CustomButton from "../components/CustomButton";
import { getUserInfo } from "../utils/user";
import MainStackNavigator from "./MainStackNavigator";

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
    <ImageBackground
      source={require("../assets/splash-1.png")}
      style={{
        position: "absolute",
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
    <View
      style={{
        position: "absolute",
        zIndex: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: 0.5,
      }}
    />
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
      <Drawer.Screen name="Your Orders" component={MainStackNavigator} />
      <Drawer.Screen name="Your Posts" component={MainStackNavigator} />
      {/* <Drawer.Screen name="SignIn" component={SignInScreen} /> */}
      {/* <Drawer.Screen name="SignUp" component={SignUpScreen} /> */}
      <Drawer.Screen name="LogOut">
        {() => (
          <SignOut
            onPress={() => {
              logout()
                .then()
                .error((err) => Alert.alert(err.message));
            }}
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
