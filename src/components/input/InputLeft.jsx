import { Image, Pressable, StyleSheet, View } from "react-native";
import STAR from "../../assets/images/talktalk/star.png";
import STAR_PRESS from "../../assets/images/talktalk/star_press.png";
import { COLORS } from "../../styles/color";

export const InputLeft = ({ selected = false, onFavoriteToggle, disabled }) => {
  return (
    <Pressable onPress={onFavoriteToggle} disabled={disabled}>
      <View style={styles.inputLeft}>
        <Image source={selected ? STAR_PRESS : STAR} style={styles.leftImage} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputLeft: {
    justifyContent: "center",
    alignItems: "center",
    width: 28,
    height: 28,
    backgroundColor: COLORS.WHITE,
    borderRadius: 33.3,
  },

  leftImage: {
    width: 19.33,
    height: 19.33,
  },
});
