import React from "react";
import { View } from "react-native";
import StatisticsBox from "../StatisticsBox";
import { COLORS } from "../../../../styles/color";
import UsingTopItem from "./UsingTopItem";

const UsingTop = ({ data }) => {
  return (
    <StatisticsBox
      title="자주 사용하는 문장 TOP 5"
      height="234"
      bgColor={COLORS.MAIN_YELLOW2}
    >
      <View style={{ flexDirection: "column", gap: 8 }}>
        {data.slice(0, 5).map((item, i) => (
          <UsingTopItem
            key={i}
            rank={item.rank}
            text={item.text}
            delay={i * 100}
          />
        ))}
      </View>
    </StatisticsBox>
  );
};

export default UsingTop;
