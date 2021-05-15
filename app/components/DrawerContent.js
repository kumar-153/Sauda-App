import React from "react";
import { Drawer } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import SafeScreen from "../screens/SafeScreen";

function DrawerContent() {
  const [active, setActive] = React.useState("");
  return (
    <SafeScreen style={styles.container}>
      <Drawer.Section title="Products" style={styles.section}>
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => setActive("first")}
          style={styles.item}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
          style={styles.item}
        />
      </Drawer.Section>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  section: {
    fontSize: 34,
  },
  item: {
    padding: 10,
  },
});

export default DrawerContent;
