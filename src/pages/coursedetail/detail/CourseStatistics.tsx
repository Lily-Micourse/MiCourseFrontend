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

export default function CourseStatistics(props: Props) {
  return (
    <StyledSection>
      <h4>各项指数</h4>
      <Row>
        <Col md={4}>
          <CourseIndex title={"考核方式"} items={props.indexes.examineIndexes}/>
        </Col>
        <Col md={4}>
          <CourseIndex title={"压力指数"} items={props.indexes.pressureIndexes}/>
        </Col>
        <Col md={4}>
          <CourseIndex title={"总评成绩"} items={props.indexes.gradeindexes}/>
        </Col>
      </Row>
    </StyledSection>
  );
}
