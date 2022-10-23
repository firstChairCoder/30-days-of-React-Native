import * as React from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

import { COLORS, SIZES } from "~/constants";

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    backgroundColor: COLORS.black50,
    flex: 1,
    justifyContent: "center"
  },
  contents: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingVertical: SIZES.base / 2
  },
  item: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1
  }
});

interface ModalMenuProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalMenu = ({ isVisible, onClose, children }: ModalMenuProps) => {
  const items = React.Children.toArray(children);

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <Pressable style={styles.root} onPress={onClose}>
        <View style={styles.contents}>
          {items.map((item, i) => (
            <View
              key={i}
              style={{
                ...styles.item,
                borderBottomWidth: i < items.length - 1 ? 1 : 0
              }}
            >
              {item}
            </View>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

export default ModalMenu;
