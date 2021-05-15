import { Formik } from "formik";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { Chip, TextInput } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";
import CustomTextInput from "../components/CustomTextInput";
import ErrorMessage from "../components/ErrorMessage";
import SafeScreen from "./SafeScreen";
import CustomButton from "../components/CustomButton";
import colors from "../config/colors";
import FormImagePicker from "../components/FormImagePicker";
import CustomPicker from "../components/CustomPicker";
import { addProduct } from "../config/data";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  features: Yup.string().required().label("Features"),
  // category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please upload atleast one image."),
});

const items = [
  { label: "How you are", value: 1 },
  { label: "do you think", value: 10 },
  { label: "So this you", value: 30 },
];

function RentItemScreen({ navigation }) {
  return (
    <ScrollView style={{ height: "100%" }}>
      <SafeScreen style={styles.container}>
        <Formik
          initialValues={{
            title: "",
            price: "",
            description: "",
            features: "",
            category: null,
            image: [],
          }}
          onSubmit={(data) => {
            data.features = [
              ...data.features.split().map((feature) => feature.trim()),
            ];
            data.type = "rent";
            addProduct(data);
            navigation.navigate("PickItem");
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            values,
            setFieldValue,
          }) => (
            <>
              <FormImagePicker name="image" style={{ width: "100%" }} />
              <CustomTextInput
                type="outlined"
                label="Title"
                maxLength={255}
                placeholder="Enter Product Title..."
                onBlur={() => setFieldTouched("title")}
                onChangeText={handleChange("title")}
                left={
                  <TextInput.Icon
                    name={() => (
                      <FontAwesome
                        name="product-hunt"
                        size={24}
                        color={colors.primary}
                      />
                    )}
                  />
                }
              />
              <ErrorMessage error={errors.title} visible={touched.title} />
              <CustomTextInput
                type="outlined"
                label="Price"
                maxLength={8}
                keyboardType="numeric"
                placeholder="Enter Product Price..."
                onBlur={() => setFieldTouched("price")}
                onChangeText={handleChange("price")}
                left={
                  <TextInput.Icon
                    name={() => (
                      <FontAwesome
                        name="rupee"
                        size={24}
                        color={colors.primary}
                      />
                    )}
                  />
                }
              />
              <ErrorMessage error={errors.price} visible={touched.price} />
              <CustomTextInput
                type="outlined"
                label="Description"
                multiline
                placeholder="Enter Product Description..."
                onBlur={() => setFieldTouched("description")}
                onChangeText={handleChange("description")}
                left={
                  <TextInput.Icon
                    name={() => (
                      <FontAwesome
                        name="info-circle"
                        size={24}
                        color={colors.primary}
                      />
                    )}
                  />
                }
              />
              <ErrorMessage error={errors.price} visible={touched.price} />

              <CustomPicker
                label="category"
                selectedItem={values.category}
                onSelectItem={(item) => setFieldValue("category", item)}
                placeholder="Category..."
                icon="apps"
                items={items}
              />

              <CustomTextInput
                type="outlined"
                label="Features"
                multiline
                placeholder="Enter Features with a comma..."
                onBlur={() => setFieldTouched("Features")}
                onChangeText={handleChange("features")}
                left={
                  <TextInput.Icon
                    name={() => (
                      <FontAwesome
                        name="chevron-circle-right"
                        size={24}
                        color={colors.primary}
                      />
                    )}
                  />
                }
              />
              <ErrorMessage
                error={errors.features}
                visible={touched.features}
              />
              {values.features.length > 0 && (
                <View style={styles.features}>
                  {values.features.split(",").map((feature, idx) => {
                    if (feature.trim().length > 0) {
                      return (
                        <Chip
                          key={idx}
                          icon="information"
                          style={styles.featureChip}
                          textStyle={{ color: "white" }}
                          onPress={() => console.log("Pressed")}
                        >
                          {feature.trim()}
                        </Chip>
                      );
                    } else return <View key={idx}></View>;
                  })}
                </View>
              )}
              <CustomButton onPress={handleSubmit}>
                Post Item on Rent
              </CustomButton>
            </>
          )}
        </Formik>
      </SafeScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginBottom: 100,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  featureChip: {
    margin: 10,
    backgroundColor: colors.primary,
  },
});

export default RentItemScreen;
