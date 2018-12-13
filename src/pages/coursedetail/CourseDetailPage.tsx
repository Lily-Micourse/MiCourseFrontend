import React from "react";
import Query from "@/apis/Query";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import CourseDetailPanel from "@/pages/coursedetail/detail/CourseDetailPanel";
import CourseCommentPanel from "@/pages/coursedetail/comment/CourseCommentPanel";

interface Props {
  id: string;
}

export default class CourseDetailPage extends React.Component<Props, {}> {

  fetchCourseDetail = async () => {
    const courseService = useApiService(CourseService);
    const detail = await courseService.getCourseDetail(this.props.id);
    return detail;
  }

  render() {
    return (
      <div>
        <Query call={this.fetchCourseDetail}>
          { (data, isLoading) => {
            if (isLoading) {
              return "isLoading";
            }
            return <CourseDetailPanel detail={data!}/>;
          }}
        </Query>
        <CourseCommentPanel/>
      </div>
    );
  }
}
