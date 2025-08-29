import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../../../../styles/color";
import Feather from "@expo/vector-icons/Feather";
import SOS from "../../../../assets/images/sos-call.png";

const SosModal = () => {
  return (
    <View style={styles.modalContainer}>
      {/* 취소 아이콘 */}
      <Feather
        name="x"
        size={24}
        color={COLORS.CANCLE_CLICK}
        style={styles.closeIcon}
      />
      {/* sos 아이콘, 제목 */}
      <View style={styles.modalTitle}>
        <Image
          source={SOS}
          style={{
            width: 24,
            height: 24,
          }}
        />
        <Text style={styles.titleText}>긴급 호출 이력</Text>
      </View>
      {/* 지도 */}
      <View style={styles.mapContainer}>
        <Text>지도 보일 부분</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: 302,
    height: 465,
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
    backgroundColor: COLORS.WHITE,
    borderWidth: 2,
    borderColor: COLORS.MAIN_YELLOW1,
    borderRadius: 20,
    position: "relative",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  modalTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  titleText: {
    color: COLORS.BLACK,
    fontSize: 12,
    fontWeight: 600,
  },
  mapContainer: {
    width: 273,
    height: 400,
    borderRadius: 10,
    backgroundColor: COLORS.GRAY, // 임시
  },
});

export default SosModal;
