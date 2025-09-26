import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../styles/color";

export const AfterLocationBox = ({ location, mystate }) => {
  return (
    <View style={styles.locationBox}>
      <Text style={styles.locationText}>
        {Array.isArray(location) ? location.join(", ") : location}
      </Text>
      <View style={styles.locationLine} />
      <Text style={styles.locationSentence}>
        {mystate ? mystate : "상황설명 없음"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationBox: {
    width: 327.33,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.MAIN_YELLOW3,
    borderRadius: 33.33,
    paddingLeft: 10,
    gap: 8,
  },

  locationText: {
    fontSize: 18.67,
    fontFamily: "PretendardBold",
  },

  locationLine: {
    width: 1,
    height: 22.5,
    backgroundColor: COLORS.WHITE,
  },

  locationSentence: {
    fontSize: 12,
    fontFamily: "PretendardRegular",
  },
});
