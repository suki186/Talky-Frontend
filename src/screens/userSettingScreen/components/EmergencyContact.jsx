import { useState, useEffect } from "react";
import SettingBox from "../../../components/setting/SettingBox";
import { Text, View, StyleSheet, Alert } from "react-native";
import { COLORS } from "../../../styles/color";
import EditableField from "../../../components/setting/EditableField";
import RadioButton from "../../../components/RadioButton";
import {
  formatPhoneToDisplay,
  formatPhoneToServer,
  isValidPhone,
} from "../../../utils/phone";
import editUserGuardianInfoApi from "../../../apis/userSetting/editUserGuardianInfoApi";

const PHONE_PLACEHOLDER = "010-0000-0000";

const EmergencyContact = ({
  initGuardName,
  initGuardPhone,
  selectedTarget = "119",
  onChangeTarget,
}) => {
  const [guardName, setGuardName] = useState(initGuardName ?? ""); // 보호자 이름
  const [guardPhone, setGuardPhone] = useState(initGuardPhone ?? ""); // 보호자 연락처

  useEffect(() => {
    if (typeof initGuardName === "string") setGuardName(initGuardName);
  }, [initGuardName]);

  useEffect(() => {
    if (typeof initGuardPhone === "string") setGuardPhone(initGuardPhone);
  }, [initGuardPhone]);

  // 보호자 이름 수정
  const handleGuardNameComplete = (newName) => {
    if (newName === guardName) return;

    if (!isValidPhone(guardPhone)) {
      Alert.alert(
        "연락처 필요",
        "이름을 수정하려면 먼저 유효한 보호자 연락처를 입력해 주세요."
      );
      return;
    }

    const prev = guardName;
    setGuardName(newName);

    editUserGuardianInfoApi(newName, guardPhone)
      .then((success) => {
        if (!success) {
          setGuardName(prev);
          Alert.alert(
            "오류",
            "보호자 이름 수정에 실패했습니다. 다시 시도해주세요."
          );
        }
      })
      .catch(() => {
        setGuardName(prev);
        Alert.alert("오류", "보호자 이름 수정 중 오류가 발생했습니다.");
      });
  };

  // 보호자 연락처 수정
  const handlePhoneComplete = (inputPhone) => {
    const serverPhone = formatPhoneToServer(inputPhone);

    if (!isValidPhone(serverPhone)) {
      Alert.alert("형식 오류", "유효한 전화번호를 입력해 주세요.");
      return;
    }

    if (serverPhone === guardPhone) return;

    const prev = guardPhone;
    setGuardPhone(serverPhone);

    editUserGuardianInfoApi(guardName, serverPhone)
      .then((success) => {
        if (!success) {
          setGuardPhone(prev);
          Alert.alert(
            "오류",
            "보호자 연락처 수정에 실패했습니다. 다시 시도해주세요."
          );
        }
      })
      .catch(() => {
        setGuardPhone(prev);
        Alert.alert("오류", "보호자 연락처 수정 중 오류가 발생했습니다.");
      });
  };

  return (
    <SettingBox height={162} title="긴급 연락처" bgColor={COLORS.MAIN_YELLOW1}>
      {/* 보호자 정보 */}
      <View style={styles.infoContainer}>
        <EditableField
          label="보호자 이름"
          value={guardName}
          placeholder="이름을 입력해 주세요"
          width={126}
          onComplete={handleGuardNameComplete}
        />
        <EditableField
          label="보호자 연락처"
          value={formatPhoneToDisplay(guardPhone)}
          placeholder={PHONE_PLACEHOLDER}
          width={126}
          onComplete={handlePhoneComplete}
        />
      </View>
      <View style={styles.alignRow}>
        <Text style={styles.text}>긴급호출 연락처</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton
          label="보호자"
          selected={selectedTarget === "guardian"}
          onPress={() => onChangeTarget?.("guardian")}
        />
        <RadioButton
          label="119"
          selected={selectedTarget === "119"}
          onPress={() => onChangeTarget?.("119")}
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
    fontFamily: "PretendardMedium",
  },
  item: {
    marginTop: 8,
    marginBottom: 8,
  },
});

export default EmergencyContact;
