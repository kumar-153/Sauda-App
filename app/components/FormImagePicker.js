import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "./CustomText";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "./ImageInputList";

function FormImagePicker({ name, style }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageURIs = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageURIs, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageURIs.filter((imageURI) => imageURI !== uri)
    );
  };
  return (
    <View style={style}>
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default FormImagePicker;
