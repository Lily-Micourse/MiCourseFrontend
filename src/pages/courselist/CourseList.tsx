import React from "react";
import Query from "@/apis/Query";
import { CourseListItem } from "@/models/course/Course";
import { CourseListQuery } from "@/models/course/CourseQuery";
import { CourseListItemBox } from "@/pages/courselist/Course";
import Section from "@/components/ui/Section";
import { Col, Container, Row } from "reactstrap";
import Recommendation from "@/pages/coursedetail/recommendation";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { range } from "@/utils/range";
import Link from "next/link";
import { WithRouterProps, withRouter } from "next/router";


function ListPagination({ page, count, query }: { page: number, count: number, query: any }) {
  const step = 5;
  const lower = page ? Math.floor(page / step) * step : 0;
  const upper = count - lower > step ? lower + step : count;

  return (
    <Pagination>
      <PaginationItem>
        <Link href={{ pathname: "/course", query: { ...query, page: lower - step } }}>
          <PaginationLink previous disabled={lower === 0} />
        </Link>
      </PaginationItem>
      {range(lower, upper).map((x) =>
        <PaginationItem key={x} active={x === page}>
          <Link href={{ pathname: "/course", query: { ...query, page: x + 1 } }}>
            <PaginationLink>
              {x + 1}
            </PaginationLink>
          </Link>
        </PaginationItem>
      )}
      <PaginationItem>
        <Link href={{ pathname: "/course", query: { ...query, page: lower + step } }}>
          <PaginationLink next disabled={upper == count} />
        </Link>
      </PaginationItem>
    </Pagination>
  );
}


interface Props extends WithRouterProps {
  list: CourseListItem[];
  count: number;
}

class CourseList extends React.Component<Props, {}> {
  render() {
    const page = parseInt(this.props.router.query!.page as string);
    return (
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <Section>
              <h4>课程列表</h4>
              {this.props.list.map((course) => <CourseListItemBox key={course.id} course={course} />)}
              <ListPagination page={isNaN(page) ? 0 : page - 1} count={this.props.count}
                query={this.props.router.query}
              />
            </Section>
          </Col>
          <Col xs={0} lg={4}>
            <Recommendation />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(CourseList);
