import React from "react";
import Query from "@/apis/Query";
import { CourseListItem } from "@/models/course/Course";
import { CourseListQuery } from "@/models/course/CourseQuery";
import { CourseListItemBox } from "@/pages/courselist/Course";
import Section from "@/components/ui/Section";
import { Col, Container, Row } from "reactstrap";
import Recommendation from "@/pages/coursedetail/recommendation";

interface Props {
  list: CourseListItem[];
  query?: CourseListQuery;
}

export default class CourseList extends React.Component<Props, {}> {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <Section>
              <h4>课程列表</h4>
              {this.props.list.map((course) => <CourseListItemBox key={course.id} course={course}/>)}
            </Section>
          </Col>
          <Col xs={0} lg={4}>
            <Recommendation/>
          </Col>
        </Row>
      </Container>
    );
  }
}
