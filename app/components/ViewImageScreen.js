import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen({ navigation, route }) {
  const { source } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => console.log("OnPress")}
      >
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </TouchableOpacity>
      <Image resizeMode="contain" source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
