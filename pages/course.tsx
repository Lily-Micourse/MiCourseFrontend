import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import { UserService } from "@/apis/UserService";
import { useApiService } from "@/apis";
import CourseDetailPage from "@/pages/coursedetail/CourseDetailPage";
import CourseList, { CourseListQueryType } from "@/pages/courselist/CourseList";

interface SearchQuery extends CourseListQueryType {
  id?: string;
}

interface Props {
  search: SearchQuery;
}

export default class CoursePage extends React.Component<Props> {

  static async getInitialProps({ query }: { query: SearchQuery }) {
    return { search: query };
  }

  render() {
    return (
      <IndexLayout>
        { this.props.search.id !== undefined
        ? <CourseDetailPage id={this.props.search.id}/>
        : <CourseList query={this.props.search}/>
        }
      </IndexLayout>
    );
  }
}
