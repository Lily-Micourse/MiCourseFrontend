import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { useApiService } from "@/apis";
import CourseDetailPage from "@/pages/coursedetail/CourseDetailPage";
import CourseList from "@/pages/courselist/CourseList";
import { CourseService } from "@/apis/CourseService";
import { CourseListItem } from "@/models/course/Course";
import { CourseListQuery, CourseQueryType, CourseType } from "@/models/course/CourseQuery";
import LimitedWidthDiv from "@/layout/LimitedWidthDiv";

interface SearchQuery extends CourseListQuery {
  id?: string;
}

type Props = { id: string } | { list: CourseListItem[] };

export default class CoursePage extends React.Component<Props> {

  static async getInitialProps({ query: { id, page = 0, query = "", queryType = CourseQueryType.STRING } }: { query: SearchQuery }) {

    if (!id) {
      const courseService = useApiService(CourseService);
      console.log("here");
      console.log(query);
      const list = query
        ? await courseService.getCoursesByQuery(queryType, query, page)
        : await courseService.getCoursesByType(CourseType.HOT, page);
      return { list };
    }
    return { id };
  }

  render() {
    return (
      <IndexLayout>
        {"id" in this.props
          ? <CourseDetailPage id={this.props.id}/>
          : <CourseList list={this.props.list}/>
        }
      </IndexLayout>
    );
  }
}
