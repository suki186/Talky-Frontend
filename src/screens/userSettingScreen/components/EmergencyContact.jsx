import React, { useState } from "react";
import SettingBox from "../../../components/setting/SettingBox";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../../styles/color";
import EditableField from "../../../components/setting/EditableField";
import RadioButton from "../../../components/RadioButton";

const EmergencyContact = ({ guardName, phone }) => {
  const [selectedOption, setSelectedOption] = useState("119");

  return (
    <SettingBox height={162} title="긴급 연락처" bgColor={COLORS.MAIN_YELLOW1}>
      {/* 보호자 정보 */}
      <View style={styles.infoContainer}>
        <EditableField
          label="보호자 이름"
          value={guardName}
          placeholder="이름을 입력해 주세요"
          width={126}
        />
        <EditableField
          label="보호자 연락처"
          value={phone}
          placeholder="010-0000-0000"
          width={126}
        />
      </View>
      <View style={styles.alignRow}>
        <Text style={styles.text}>긴급호출 연락처</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton
          label="보호자"
          selected={selectedOption === "guardian"}
          onPress={() => setSelectedOption("guardian")}
        />

        <RadioButton
          label="119"
          selected={selectedOption === "119"}
          onPress={() => setSelectedOption("119")}
        />
      </View>
    </SettingBox>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 16,
  },
  radioContainer: {
    flexDirection: "row",
    gap: 97,
  },
  alignRow: {
    alignSelf: "flex-start",
    marginLeft: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: 10,
    fontWeight: "500",
  },
  item: {
    marginTop: 8,
    marginBottom: 8,
  },
});

export default EmergencyContact;
