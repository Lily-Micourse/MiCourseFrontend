import React from "react";
import { Section } from "@/components/ui";
import { CourseListItem } from "@/models/course/Course";


function CourseCard ({course}:{course:CourseListItem}){
  return (
    <div>{course.name}</div>
  )
}

export default function HottestCourse ({list}:{list:CourseListItem[]}){
  return (
    <Section>
      <h4>最热课程排行榜</h4>
      {list.map(x=> <CourseCard key={x.id} course={x}/>)}
    </Section>
  );
}
