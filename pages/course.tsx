import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { useApiService } from "@/apis";
import CourseDetailPage from "@/pages/coursedetail/CourseDetailPage";
import CourseList from "@/pages/courselist/CourseList";
import { CourseService, CourseListResponse } from "@/apis/CourseService";
import { CourseListItem } from "@/models/course/Course";
import { CourseListQuery, CourseQueryType, CourseType } from "@/models/course/CourseQuery";
import LimitedWidthDiv from "@/layout/LimitedWidthDiv";
import { CourseDetail } from "@/models/course/CourseDetail";
import Router from "next/router";

interface SearchQuery extends CourseListQuery {
  id?: string;
}

type Props = { id: string } | { res: CourseListResponse};

export default class CoursePage extends React.Component<Props> {

  static async getInitialProps({ query: { id, page = 0, query = "", queryType = CourseQueryType.STRING } }: { query: SearchQuery }) {

    if (!id) {
      const courseService = useApiService(CourseService);
      const res = query
        ? await courseService.getCoursesByQuery(queryType, query, page)
        : await courseService.getCoursesByType(CourseType.HOT, page);

      return { res };
    }
    return { id };
  }

  render() {
    return (
      <IndexLayout>
        {"id" in this.props
          ? <CourseDetailPage id={this.props.id} />
          : <CourseList list={this.props.res.data} count={this.props.res.count} />
        }
      </IndexLayout>
    );
  }
}
