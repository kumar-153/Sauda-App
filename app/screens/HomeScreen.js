import React, { useContext } from "react";
import styled from "styled-components";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListOwner from "../components/ListOwner";
import { AuthContext } from "../context/auth";
import SafeScreen from "./SafeScreen";
import colors from "../config/colors";

const data = [
  {
    title: "Your Orders",
    navigateTo: "Your Orders",
    icon: "post",
  },
  {
    title: "Edit Profile",
    navigateTo: "Profile",
    icon: "face-profile",
  },
  {
    title: "Your Posts",
    navigateTo: "Your Posts",
    icon: "post",
  },
  {
    title: "Logout",
    navigateTo: "LogOut",
    icon: "logout",
  },
];

function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <SafeScreen style={{ alignItems: "flex-start" }}>
      <View style={styles.container}>
        <ListOwner
          image={user.avatar}
          name={user.firstName + " " + user.lastName}
          subTitle={user.email}
        />
      </View>
      <View style={styles.itemContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 10,
                margin: 10,
                backgroundColor: colors.white,
                borderRadius: 10,
                width: 350,
              }}
              onPress={() => navigation.navigate(item.navigateTo)}
            >
              <ListOwner
                size={30}
                // image={user.avatar}
                icon={item.icon}
                name={item.title}
                subTitle={item.description}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  itemContainer: {
    padding: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;
