// @refresh reset
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import "firebase/firestore";

import { AuthContext, AuthProvider } from "./app/context/auth";
import { firebaseConfig } from "./app/config/env_const";
import colors from "./app/config/colors";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useContext } from "react";
import DrawerNavigator from "./app/navigation/DrawerNavigator";
import { useEffect } from "react";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: "yellow",
  },
};

const NavComponent = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <NavComponent />
      </PaperProvider>
    </AuthProvider>
  );
}
