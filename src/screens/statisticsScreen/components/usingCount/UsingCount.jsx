import React from "react";
import { Text } from "react-native";
import LineGraph from "./LineGraph";
import StatisticsBox from "../StatisticsBox";

const UsingCount = ({ data }) => {
  return (
    <StatisticsBox title="발화 기능 사용 횟수">
      {data.length > 0 ? (
        <LineGraph data={data} />
      ) : (
        <Text>아직 사용 내역이 없습니다!</Text>
      )}
    </StatisticsBox>
  );
};

export default UsingCount;
