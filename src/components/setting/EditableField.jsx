// 수정 버튼이 있는 필드
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SettingLabel from "./SettingLabel";
import { COLORS } from "../../styles/color";

const EditableField = ({
  label,
  value,
  onChange,
  placeholder = "",
  width = 141,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const toggleEdit = () => {
    if (isEditing) {
      onChange(inputValue);
    }
    setIsEditing(!isEditing);
  };

  return (
    <View style={[styles.container, { width }]}>
      <SettingLabel>{label}</SettingLabel>

      <View style={[styles.fieldContainer, { width }]}>
        {isEditing ? (
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            placeholder={placeholder}
            placeholderTextColor={COLORS.PLACE_HOLDER}
            style={styles.input}
          />
        ) : (
          <Text style={[styles.text, !value && { color: COLORS.PLACE_HOLDER }]}>
            {value || placeholder}
          </Text>
        )}

        {/* 수정버튼 */}
        <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
          <Text style={styles.editText}>{isEditing ? "완료" : "수정"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0, // 수정 가능
  },
  fieldContainer: {
    height: 25,
    borderRadius: 14,
    backgroundColor: COLORS.BACKGROUND,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 8,
    color: COLORS.SUB_BLACK,
    flex: 1,
  },
  input: {
    fontSize: 8,
    fontFamily: "PretendardRegular",
    color: COLORS.BLACK,
    padding: 0,
    flex: 1,
  },
  editButton: {
    width: 32,
    height: 15,
    borderRadius: 10,
    backgroundColor: COLORS.MAIN_YELLOW2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  editText: {
    fontSize: 8,
    fontFamily: "PretendardRegular",
    color: COLORS.SUB_BLACK,
  },
});

export default EditableField;
