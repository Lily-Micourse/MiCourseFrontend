import React from "react";
import Query from "@/apis/Query";
import { CourseListItem } from "@/models/course/Course";
import { CourseListQuery } from "@/models/course/CourseQuery";

interface Props {
  list: CourseListItem[];
  query?: CourseListQuery;
}

export default class CourseList extends React.Component<Props, {}> {
  render() {
    return (
      <>
        {this.props.list.map((course) => <div key={course.id}>{course.name}</div>)}
      </>);
  }
}
