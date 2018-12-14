import * as React from "react";
import { CourseIndexes } from "@/models/course/CourseDetail";
import { Section } from "@/components/ui";
import { Col, Row } from "reactstrap";
import CourseIndex from "@/pages/coursedetail/detail/CourseIndex";
import styled from "styled-components";

interface Props {
  indexes: CourseIndexes;
}

const StyledSection = styled(Section)`
  padding-bottom: 60px;
`;

const examineKeyMap = {
  essay: "论文",
  checkin: "签到",
  discussion: "讨论",
};

const pressureKeyMap = {
  low: "低",
  moderate: "中",
  high: "高",
};

const gradeKeyMap = {
  A: ">=90",
  B: "80-90",
  C: "70-80",
  D: "60-70",
  E: "<60",
};

export default function CourseStatistics(props: Props) {
  return (
    <StyledSection>
      <h4>各项指数</h4>
      <Row>
        <Col md={4}>
          <CourseIndex
            title={"考核方式"}
            items={props.indexes.examineIndexes}
            mapKeys={examineKeyMap}
          />
        </Col>
        <Col md={4}>
          <CourseIndex
            title={"压力指数"}
            items={props.indexes.pressureIndexes}
            mapKeys={pressureKeyMap}
          />
        </Col>
        <Col md={4}>
          <CourseIndex
            title={"总评成绩"}
            items={props.indexes.gradeindexes}
            mapKeys={gradeKeyMap}
          />
        </Col>
      </Row>
    </StyledSection>
  );
}
