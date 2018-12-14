import * as React from "react";
import CourseRecommendation from "@/pages/coursedetail/recommendation/CourseRecommendation";
import TagRecommendation from "@/pages/coursedetail/recommendation/TagRecomendation";

interface Props {

}

export default function Recommendation(props: Props) {
  return (
    <div>
      <CourseRecommendation/>
      <TagRecommendation/>
    </div>
  );
}
