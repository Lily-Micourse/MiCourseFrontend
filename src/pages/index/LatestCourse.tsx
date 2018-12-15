import React from "react";
import { Section } from "@/components/ui";
import {Carousel } from "reactstrap";
import { CourseListItem } from "@/models/course/Course";


function CourseCard({course}:{course:CourseListItem}){

}

export default function LatestCourse (){
  return (
    <Section>
      <h4>新课速递</h4>
    </Section>
  );
}
