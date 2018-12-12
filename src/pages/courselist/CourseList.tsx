import React from "react";
import Query from "@/apis/Query";
import { CourseListItem } from "@/models/course/Course";

export interface CourseListQueryType {
  query?: string;
  queryType?: "string" | "credit" | "department" | "category";
  page?: number;
}

interface Props {
  list: CourseListItem[];
  query?: CourseListQueryType;
}

export default class CourseList extends React.Component<Props, {}> {
  render() {
    return (
      <>
        {this.props.list.map((course) => <div key={course.id}>{course.name}</div>)}
      </>);
  }
}
