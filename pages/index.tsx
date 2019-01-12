import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { UserStore } from "@/stores/UserStore";
import { connect, ConnectedProps } from "@/stores/connect";
import { Container, Row, Col } from "reactstrap";
import { Section } from "@/components/ui";
import LatestCourse from "@/pages/index/LatestCourse";
import HottestCourse from "@/pages/index/HottestCourse";
import { CourseListQuery, CourseQueryType, CourseType } from "@/models/course/CourseQuery";
import { CourseListItem } from "@/models/course/Course";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";

interface Props extends ConnectedProps {
  hottestCourses: CourseListItem[];
  latestCourses: CourseListItem[];
}

class IndexPage extends React.Component<Props> {

  static async getInitialProps() {
    const courseService = useApiService(CourseService);
    return {
      hottestCourses: (await courseService.getCoursesByType(CourseType.HOT, 0, 6)).data,
      latestCourses: (await courseService.getCoursesByType(CourseType.LATEST,0,6)).data,
    }
  }

  render() {
    const userStore = this.props.useStore(UserStore);
    return (
      <IndexLayout>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8}>
              <LatestCourse />
              <HottestCourse list={this.props.hottestCourses} />
            </Col>
            <Col xs={12} sm={12} md={4}>
              <Section>热门标签</Section>
            </Col>
          </Row>
        </Container>
      </IndexLayout>
    );
  }
}

export default connect(UserStore)(IndexPage);
