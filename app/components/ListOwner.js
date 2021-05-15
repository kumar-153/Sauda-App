import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomText from "./CustomText";

function ListOwner({ image, name, subTitle, size = 70, icon }) {
  return (
    <View style={styles.container}>
      {image && (
        <Image
          source={image}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            marginRight: 10,
          }}
        />
      )}
      {icon && (
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            marginRight: 10,
          }}
        >
          <MaterialCommunityIcons name={icon} size={size} />
        </View>
      )}
      <View style={styles.info}>
        <CustomText style={styles.name}>{name}</CustomText>
        {subTitle && (
          <CustomText style={styles.subtitle}>{subTitle}</CustomText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 20,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "#6e6969",
  },
});

export default ListOwner;
