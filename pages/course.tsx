import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { UserService } from "@/apis/UserService";
import { useApiService } from "@/apis";
import CourseDetailPage from "@/pages/coursedetail/CourseDetailPage";
import CourseList, { CourseListQueryType } from "@/pages/courselist/CourseList";
import { CourseService } from "@/apis/CourseService";
import { CourseListItem } from "@/models/course/Course";

interface SearchQuery extends CourseListQueryType {
  id?: string;
}

type Props = { id: string } | { list: CourseListItem[] };

export default class CoursePage extends React.Component<Props> {

  static async getInitialProps({ query: { id, page = 0, query = "", queryType = "string" } }: { query: SearchQuery }) {

    if (!id) {
      const courseService = useApiService(CourseService);
      console.log("here");
      console.log(query);
      const list = query
        ? await courseService.getCourseByQuery(queryType, query, page)
        : await courseService.getCoursesByType("hot", page);
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
