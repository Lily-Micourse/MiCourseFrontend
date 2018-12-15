import * as React from "react";
import { CommentStore } from "./CommentStore";
import { ConnectedProps, connect } from "@/stores/connect";
import { Section } from "@/components/ui";
import InputPanel from "./InputPanel";
import styled from "styled-components";
import CommentItem from "./CommentItem";

interface Props extends ConnectedProps {
  terms: string[];
  courseId: string;
}

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {

    }
`;

export default connect(CommentStore)(function CourseCommentPanel(props: Props) {

  const commentStore = props.useStore(CommentStore);

  return (
    <Section>
      <h4>课程评论</h4>
      <InputPanel
        terms={props.terms}
        courseId={props.courseId}
        refreshComments={commentStore.fetchComments}
      />
      {commentStore.state.loading
        ? "加载评论中……"
        : (
          <Ul>
            {commentStore.state.comments.map((x) => <CommentItem key={x.id} comment={x} />)}
          </Ul>
        )
      }
    </Section>
  );
});
