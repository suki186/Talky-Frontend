// 이름 + 아이디
import React from "react";
import { View, StyleSheet } from "react-native";
import EditableField from "./EditableField";
import ReadOnlyField from "./ReadOnlyField";

const NameIdGroup = ({ name, onComplete, id }) => {
  return (
    <View style={styles.container}>
      <EditableField
        label="이름"
        value={name}
        onComplete={onComplete}
        placeholder="이름을 입력하세요"
      />
      <ReadOnlyField label="아이디" value={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
});

export default NameIdGroup;
