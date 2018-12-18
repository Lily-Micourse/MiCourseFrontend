import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { useApiService } from "@/apis";
import CourseList from "@/pages/courselist/CourseList";
import { CourseService } from "@/apis/CourseService";
import { CourseListItem } from "@/models/course/Course";
import { CourseListQuery, CourseQueryType, CourseType } from "@/models/course/CourseQuery";
import LimitedWidthDiv from "@/layout/LimitedWidthDiv";
import { CourseDetail } from "@/models/course/CourseDetail";
import CourseDetailPage from "@/pages/coursedetail";

interface SearchQuery extends CourseListQuery {
  id?: string;
}

type Props = { detail: CourseDetail } | { list: CourseListItem[] };

export default class CoursePage extends React.Component<Props> {

  static async getInitialProps({ query: { id, page = 0, query = "", queryType = CourseQueryType.STRING } }: { query: SearchQuery }) {

    const courseService = useApiService(CourseService);

    if (!id) {
      const list = query
        ? await courseService.getCoursesByQuery(queryType, query, page)
        : await courseService.getCoursesByType(CourseType.HOT, page);
      return { list };
    } else {
      const detail = await courseService.getCourseDetail(id);
      return { detail };
    }
  }

  render() {
    return (
      <IndexLayout>
        {"detail" in this.props
          ? <CourseDetailPage detail={this.props.detail}/>
          : <CourseList list={this.props.list}/>
        }
      </IndexLayout>
    );
  }
}
