import React from "react";
import LineGraph from "./LineGraph";
import StatisticsBox from "../StatisticsBox";

const UsingCount = ({ data }) => {
  return (
    <StatisticsBox title="발화 기능 사용 횟수">
      {data.length > 0 && (
        <LineGraph data={data} />
      )}
    </StatisticsBox>
  );
};

export default UsingCount;
