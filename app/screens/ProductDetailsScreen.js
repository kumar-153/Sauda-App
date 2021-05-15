import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Screen from "./Screen";
import ProductImage from "../components/ProductImage";
import CustomText from "../components/CustomText";
import colors from "../config/colors";
import ListOwner from "../components/ListOwner";
import CustomButton from "../components/CustomButton";

function ProductDetailsScreen({ route }) {
  const {
    title,
    type,
    image,
    price,
    owner,
    ownerImage,
    features,
    description,
  } = route.params;
  return (
    <ScrollView>
      <Screen>
        <ProductImage source={image} />
        <View style={styles.header}>
          <CustomText style={styles.headerTitle}>{title}</CustomText>
          <View style={styles.buying}>
            <CustomText style={styles.price}>$ {price}</CustomText>
            <CustomText style={styles.type}>
              {type === "rent" ? "Rent/month" : "For Sale"}
            </CustomText>
          </View>
        </View>
        <ListOwner image={ownerImage} name={owner} subTitle="5 Listings" />
        <View style={styles.desContainer}>
          <CustomText style={styles.title}>Description</CustomText>
          <CustomText style={styles.description}>{description}</CustomText>
        </View>

        <View style={styles.desContainer}>
          <CustomText style={styles.title}>Features</CustomText>
          {features.length > 0 &&
            features.map((feature, idx) => (
              <View key={idx} style={styles.features}>
                <CustomText>{"\u2022"}</CustomText>
                <CustomText
                  style={{ color: colors.lightGray, flex: 1, paddingLeft: 5 }}
                >
                  {feature}
                </CustomText>
              </View>
            ))}
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <CustomButton style={{ marginBottom: 50 }}>
            {type === "rent" ? "Rent Item" : "Buy Item"}
          </CustomButton>
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 18,
    marginTop: 30,
    marginRight: 18,
    marginBottom: 30,
    padding: 0,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    color: "green",
    marginRight: 60,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  date: {
    marginRight: 40,
  },
  desContainer: {
    height: 200,
    marginLeft: 18,
    marginTop: 18,
    // marginBottom: 20;,
  },
  description: {
    marginTop: 14,
    color: colors.lightGray,
  },
  buying: {
    justifyContent: "center",
  },
  type: {
    paddingLeft: 8,
    fontWeight: "bold",
    color: "red",
  },
  features: {
    flexDirection: "row",
    margin: 4,
  },
});

export default ProductDetailsScreen;
