import React from "react";
import CourseDetailPanel from "@/pages/coursedetail/detail";
import CourseCommentPanel from "@/pages/coursedetail/comment/CourseCommentPanel";
import { Col, Container, Row } from "reactstrap";
import Recommendation from "@/pages/coursedetail/recommendation";

interface Props {
  id: string;
}

export default function CourseDetailPage(props: Props) {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={8}>
          <CourseDetailPanel id={props.id}/>;
          <CourseCommentPanel/>
        </Col>
        <Col xs={0} lg={4}>
          <Recommendation/>
        </Col>
      </Row>
    </Container>
  );
}
