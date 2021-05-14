import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, TouchableOpacity } from "react-native";
import SafeScreen from "../screens/SafeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "./CustomText";
import colors from "../config/colors";
import CustomButton from "./CustomButton";
import Screen from "../screens/Screen";
import PickerItem from "./PickerItem";
import { Chip } from "react-native-paper";

function CustomPicker({
  items,
  icon,
  selectedItem,
  onSelectItem,
  placeholder,
  ...otherProps
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={{ height: 100 }}
      >
        <SafeScreen style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.primary}
              style={styles.icon}
            />
          )}
          <CustomText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </CustomText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.primary}
          />
        </SafeScreen>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="slide">
        <Screen style={styles.modal}>
          <CustomButton onPress={() => setShowModal(false)}>Close</CustomButton>
          <FlatList
            data={items}
            style={styles.itemList}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setShowModal(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: "100%",
    borderRadius: 25,
    padding: 30,
    elevation: 15,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontWeight: "bold",
    color: colors.primary,
    textTransform: "uppercase",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemList: {
    margin: 30,
  },
  featureChip: {
    backgroundColor: colors.primary,
  },
});

export default CustomPicker;
