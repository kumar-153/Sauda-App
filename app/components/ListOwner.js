import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomText from "./CustomText";

function ListOwner({ image, name, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <CustomText style={styles.name}>{name}</CustomText>
        <CustomText style={styles.subtitle}>{subTitle}</CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
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
