import * as React from "react";
import Overview from "@/pages/coursedetail/detail/Overview";
import { Col, Row } from "reactstrap";
import CourseStatistics from "@/pages/coursedetail/detail/CourseStatistics";
import Description from "@/pages/coursedetail/detail/Description";
import FeedbackButtonGroup from "@/pages/coursedetail/detail/FeedbackButtonGroup";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import Query from "@/apis/Query";
import { waitForMs } from "@/utils/wait";
import { CourseDetail } from "@/models/course/CourseDetail";
import CourseCommentPanel from "@/pages/coursedetail/comment";
import CourseDetailStore from "../CourseDetailStore";
import { connect, ConnectedProps } from "@/stores/connect";

interface Props extends ConnectedProps {

}

export default connect(CourseDetailStore)(function CourseDetailPanel({ useStore }: Props) {

  const store = useStore(CourseDetailStore);

  const { detail, courseLoading, hasFeedbackLoading, hasFeedback } = store.state;

  if (courseLoading) {
    return (
      "loading..."
    );
  }

  return (
    <>
      <Overview
        info={detail!}
      >
        <FeedbackButtonGroup
          refetchDetail={store.fetchAll}
          terms={detail!.terms}
          courseId={store.courseId}
          hasFeedback={hasFeedback}
          hasFeedbackLoading={hasFeedbackLoading}
        />
      </Overview>
      <CourseStatistics indexes={detail!} />
      <Description content={detail!.description} />
      <CourseCommentPanel />
    </>
  );
});
