import React from "react";
import { Text, View } from "react-native";
import StatisticsBox from "../StatisticsBox";
import { COLORS } from "../../../../styles/color";
import UsingTopItem from "./UsingTopItem";

const UsingTop = ({ data }) => {
  const minItems = 5; // 항상 5개 렌더링
  // 데이터 부족해도 행은 있음
  const displayData = Array.from({ length: minItems }, (_, i) => ({
    rank: i + 1,
    text: data[i] ? data[i].text : "",
  }));

  return (
    <StatisticsBox
      title="자주 사용하는 문장 TOP 5"
      height="234"
      bgColor={COLORS.MAIN_YELLOW2}
    >
      <View style={{ flexDirection: "column", gap: 8, marginTop: 10 }}>
        {data.length > 0 ? (
          displayData
            .slice(0, minItems)
            .map((item, i) => (
              <UsingTopItem
                key={i}
                rank={item.rank}
                text={item.text}
                delay={i * 100}
              />
            ))
        ) : (
          <Text>아직 사용 내역이 없습니다!</Text>
        )}
      </View>
    </StatisticsBox>
  );
};

export default UsingTop;
