import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import STAR_LEFT from "../../../assets/images/talktalk/menu-left.png";
import STAR_RIGHT from "../../../assets/images/talktalk/menu-right.png";
import { SentenceScreen } from "../../sentenceScreen/SentenceScreen";
import { COLORS } from "../../../styles/color";

export const StarMenuBox = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.boxContainer}>
      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={styles.container}
      >
        <Image
          source={STAR_LEFT}
          style={styles.leftIcon}
          resizeMode="contain"
        />
        <View style={styles.menuTitle}>
          <Text style={styles.titleText}>즐겨찾기 문장들</Text>
        </View>
        <Image
          source={STAR_RIGHT}
          style={styles.rightIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {modalOpen && (
        <SentenceScreen
          visible={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    gap: 13.33,
  },

  container: {
    width: 327.33,
    height: 125,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 236, 159, 0.2)",
    borderColor: COLORS.MAIN_YELLOW3,
    borderRadius: 16.67,
    borderWidth: 6.67,
    gap: 13,
  },

  menuTitle: {
    width: 142,
    height: 31.33,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFEC9F",
    borderRadius: 16.67,
  },

  titleText: {
    textAlign: "center",
    borderRadius: 16.67,
    fontSize: 17,
    lineHeight: 14,
    fontFamily: "PretendardSemiBold",
    color: "#4E4E4E",
  },

  leftIcon: {
    width: 54.67,
    height: 48.28,
  },

  rightIcon: {
    width: 52.78,
    height: 44.8,
  },
});
