import React from "react";
import { CourseDetail } from "@/models/course/CourseDetail";
import Overview from "@/pages/coursedetail/detail/Overview";
import { Col, Container, Row } from "reactstrap";
import { Section } from "@/components/ui";

interface Props {
  detail: CourseDetail;
}

export default function CourseDetailPanel({ detail }: Props) {
  return (
    <Row>
      <Col md={8}>
        <Section>
          <Overview info={detail}/>
        </Section>
      </Col>

    </Row>
  );
}
