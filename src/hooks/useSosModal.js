import React, { useCallback, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

export const useSosModal = () => {
  const [visible, setVisible] = useState(false);
  const [row, setRow] = useState(null);

  const open = useCallback((r) => {
    setRow(r);
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setRow(null);
  }, []);

  const ModalContainer = useCallback(
    ({ children }) => (
      <Modal visible={visible} animationType="fade" transparent>
        <View style={styles.modalRoot}>
          <BlurView
            intensity={50}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.centerWrap}>{children}</View>
        </View>
      </Modal>
    ),
    [visible]
  );

  return { visible, row, open, close, ModalContainer };
};

const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerWrap: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
