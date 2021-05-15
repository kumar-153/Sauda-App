import React from "react";
import { StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";
import colors from "../config/colors";

const CustomSnackbar = ({ visible, setVisible, message }) => {
  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismissSnackBar}
      duration={8000}
      // action={{
      //   label: "Close",
      //   onPress: () => {
      //     setVisible(false);
      //   },
      // }}
      style={styles.snackbar}
    >
      {message}
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: colors.primary,
  },
});

export default CustomSnackbar;
