import React from "react";
import { LineChart } from "react-native-gifted-charts";
import { COLORS } from "../../../../styles/color";

const LineGraph = ({ data }) => {
  const values = data.map((item) => item.value); // values 배열 생성
  const rawMax = Math.max(...values); // 제일 큰 값
  const stepValue = 10; // y축 간격
  const minValue = 0; // y축 최솟값
  const maxValue = Math.ceil((rawMax + 10) / stepValue) * stepValue; // y축 최대값
  const noOfSections = Math.ceil((maxValue - minValue) / stepValue); // y축 구간 개수

  return (
    <LineChart
      data={data}
      width={255}
      height={110}
      minValue={minValue}
      maxValue={maxValue}
      stepValue={stepValue}
      spacing={38}
      noOfSections={noOfSections}
      // 그래프 선
      thickness={2}
      color={COLORS.MAIN_YELLOW2}
      // x축 가로선
      hideRules={false}
      rulesThickness={1}
      rulesColor={COLORS.GRAY}
      rulesType="solid"
      // y축
      showYAxisText={true}
      yAxisLabelWidth={15}
      yAxisColor="transparent"
      yAxisTextStyle={{
        fontSize: 8,
        fontWeight: "500",
        color: "#666666",
      }}
      // x축
      xAxisLabelWidth={10}
      xAxisColor={COLORS.GRAY}
      xAxisLabelTextStyle={{
        fontSize: 8,
        fontWeight: "500",
        color: "#666666",
      }}
      // 포인터 스타일
      showDataPoint
      dataPointsColor={COLORS.MAIN_YELLOW3}
      dataPointsRadius={5}
    />
  );
};

export default LineGraph;
