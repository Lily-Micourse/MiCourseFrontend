import React from "react";
import CourseDetailStore from "./CourseDetailStore";
import StoreProvider from "@/stores/StoreProvider";
import { CourseDetail } from "@/models/course/CourseDetail";
import CourseDetailPanel from "@/pages/coursedetail/detail";
import CourseCommentPanel from "@/pages/coursedetail/comment";
import { Col, Container, Row } from "reactstrap";
import Recommendation from "@/pages/coursedetail/recommendation";
import CommentStore from "./CommentStore";

interface Props {
  detail: CourseDetail;
}

export default class CourseDetailPage extends React.Component<Props, {}> {

  courseDetailStore = new CourseDetailStore(this.props.detail);
  commentStore = new CommentStore(this.props.detail.id);

  componentDidMount() {
    this.courseDetailStore.fetchAll();
    this.commentStore.fetchAll();
  }

  render() {

    return (
      <StoreProvider stores={[this.courseDetailStore, this.commentStore]}>
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <CourseDetailPanel />
            </Col>
            <Col xs={0} lg={4}>
              <Recommendation />
            </Col>
          </Row>
        </Container>
      </StoreProvider>
    );
  }
}
