import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import { connect, ConnectedProps } from "@/stores/connect";
import { CommentVoting } from "@/models/course/CourseComment";
import styled from "styled-components";
import CourseDetailPage from "..";
import CourseDetailStore from "../CourseDetailStore";
import CommentStore from "../CommentStore";

interface Props extends ConnectedProps {
  commentId: string;
  subCommentId?: string;
}

const StyledLink = styled.a`
  padding: 0 0 0 8px;
  color: ${({ active }) => active ? "#54ABD4" : "#7d7d7d" } !important;
  text-decoration: none;
  cursor: pointer;
  transition: 0.25s ease-out;

  :hover {
    text-decoration: none;
    color: #54ABD4 !important;
  }

`;

export default connect(CommentStore)(function CommentAction({ commentId, subCommentId, useStore }: Props) {

  const store = useStore(CommentStore);

  const comment = store.getComment(commentId, subCommentId);

  return (
    <div>
      <StyledLink
        active={store.getVoting(commentId, subCommentId) === CommentVoting.AGREE}
        onClick={() => store.agree(commentId, subCommentId)}
      >
        <FaThumbsUp /> {comment.agree}
      </StyledLink>
      <StyledLink
        active={store.getVoting(commentId, subCommentId) === CommentVoting.DISAGREE}
        onClick={() => store.disagree(commentId, subCommentId)}
      >
        <FaThumbsDown /> {comment.disagree}
      </StyledLink>
    </div>
  );
});
