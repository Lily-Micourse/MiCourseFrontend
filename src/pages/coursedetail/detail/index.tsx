import * as React from "react";
import Overview from "@/pages/coursedetail/detail/Overview";
import { Col, Row } from "reactstrap";
import CourseStatistics from "@/pages/coursedetail/detail/CourseStatistics";
import Description from "@/pages/coursedetail/detail/Description";
import FeedbackButtonGroup from "@/pages/coursedetail/detail/FeedbackButtonGroup";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import Query from "@/apis/Query";
import CourseCommentPanel from "../comment";
import { waitForMs } from "@/utils/wait";

interface Props {
  id: string;
}

async function fetchInformation(id: string) {
  const service = useApiService(CourseService);
  return service.getCourseDetail(id);

}

export default function CourseDetailPanel({ id }: Props) {
  return (
    <Query call={() => fetchInformation(id)}>
      {(data, isLoading, error, fetch) => {
        if (isLoading) {
          return "loading...";
        }
        return (
          <>
            <Overview info={data!} refetch={fetch}/>
            <CourseStatistics indexes={data!}/>
            <Description content={data!.description}/>
            <CourseCommentPanel terms={data!.terms} courseId={id}/>
          </>
        );
      }}
    </Query>
  );
}
