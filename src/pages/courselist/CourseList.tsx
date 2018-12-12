import React from "react";

export interface CourseListQueryType {
  query?: string;
  queryType?: "string" | "credit" | "department" | "category";
  page?: string;
}

interface Props {
  query: CourseListQueryType;
}

export default class CourseList extends React.Component<Props, {}> {
  render() {
    return null;
  }
}
