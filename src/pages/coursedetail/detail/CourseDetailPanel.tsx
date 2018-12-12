import React from "react";
import { CourseDetail } from "../../../models/course/CourseDetail";
import Overview from "@/pages/coursedetail/detail/Overview";

interface Props {
  detail: CourseDetail;
}

export default function CourseDetailPanel({ detail }: Props) {
  return (
    <div>
      <Overview info={detail}/>
    </div>
  );
}
