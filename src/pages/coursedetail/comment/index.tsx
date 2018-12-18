import * as React from "react";
import { ConnectedProps, connect } from "@/stores/connect";
import { Section } from "@/components/ui";
import InputPanel from "./InputPanel";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import CourseDetailStore from "../CourseDetailStore";
import CommentStore from "../CommentStore";

interface Props extends ConnectedProps {

}

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {

    }
`;

export default connect(CommentStore, CourseDetailStore)(function CourseCommentPanel(props: Props) {

  const store = props.useStore(CommentStore);
  const courseDetailStore = props.useStore(CourseDetailStore);

  return (
    <Section>
      <h4>课程评论</h4>
      <InputPanel
        terms={courseDetailStore.state.detail!.terms}
        courseId={store.state.courseId}
        refreshComments={store.fetchComments}
      />
      {store.state.commentsLoading
        ? "加载评论中……"
        : (
          <Ul>
            {store.state.comments.map((x) => <CommentItem key={x.id} comment={x} />)}
          </Ul>
        )
      }
    </Section>
  );
});
