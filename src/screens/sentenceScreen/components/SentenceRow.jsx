import { Image, Pressable, StyleSheet, View } from "react-native";
import { AfterMainSentence } from "../../talkTalkScreen/components/AfterMainSentence";

import DELETE from "../../../assets/images/talktalk/delete.png";
import DELETED from "../../../assets/images/talktalk/deleted.png";

export const SentenceRow = ({
  index,
  text,
  isSelected,
  onPress,
  deleted,
  isPending,
  onDelete,
}) => {
  return (
    <Pressable onPress={() => onDelete(index)}>
      {({ pressed }) => (
        <View
          key={index}
          style={[
            rowStyles.sentenceRow,
            isPending && {
              borderWidth: 1,
              borderColor: "#000000",
              borderRadius: 26.67,
            },
          ]}
        >
          <AfterMainSentence
            text={text}
            isSelected={isSelected}
            onPress={onPress}
            pressed={pressed}
          />
          <View style={rowStyles.deleteBoxContainer}>
            <View
              style={[rowStyles.deleteBox, { opacity: pressed ? 1 : 0.5 }]}
            />
            <Image
              source={deleted.includes(index) || isPending ? DELETED : DELETE}
              style={rowStyles.deleteButton}
            />
          </View>
        </View>
      )}
    </Pressable>
  );
};

const rowStyles = StyleSheet.create({
  sentenceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  leftBox: {
    flex: 1,
  },

  deleteBoxContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  deleteBox: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFF",
    borderRadius: 26.66,
  },

  deleteButton: {
    width: 18,
    height: 20,
  },
});
