import React from "react";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import { CommentStore } from "./CommentStore";
import CommentPanel from "./CourseCommentPanel";
import StoreProvider from "@/stores/StoreProvider";

interface Props {
  terms: string[];
  courseId: string;
}

export default class CourseCommentPanel extends React.Component<Props, {}> {

  commentStore = new CommentStore(this.props.courseId);

  componentDidMount() {
    this.commentStore.fetchComments();
  }

  render() {
    return (
      <StoreProvider stores={[this.commentStore]}>
        <CommentPanel
          terms={this.props.terms}
          courseId={this.props.courseId}
        />
      </StoreProvider>
    );
  }
}
