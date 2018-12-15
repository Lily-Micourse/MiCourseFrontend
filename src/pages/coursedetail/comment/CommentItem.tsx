import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Link from "next/link";
import { Comment, SubComment } from "@/models/course/CourseComment";
import defaultAvatar from "~/static/img/default-avatar.png";
import Hexagon from "@/components/ui/Hexagon";
import CommentActions from "./CommentAction";

interface Props {
  comment: Comment | SubComment;
}

interface State {

}

const Item = styled.li`
    padding: 12px 0 20px 0;
      display: list-item;
    text-align: -webkit-match-parent;
`;

const FMain = styled.a`
      transition: 0.25s ease-out !important;
      color: #88C5E1 !important;
`;

const ItemContent = styled.div`
      padding: 0 0 10px 0;
    word-wrap: break-word;
`;

export default function CommentItem({ comment }: Props) {
  const { userId, nickname, content, time, avatar, id } = comment;
  const isSubComment = "replyToCommentId" in comment;

  return (
    <Item>
      <Row>
        <Col className={"d-none d-sm-block"} sm={1}>
          <Hexagon width={45} height={45} url={avatar || defaultAvatar} />
        </Col>
        <Col xs={12} sm={11}>
          <div>
            <div>
              <Link href={{ pathname: "/user", query: { id: userId } }}>
                <FMain>
                  {nickname}
                </FMain>
              </Link>
            </div>
            <ItemContent>
              {content}
            </ItemContent>
            <div className="pull-left">
              <small>{time}</small>
            </div>
            <div className="pull-right">
              <CommentActions
                commentId={
                  isSubComment
                    ? (comment as SubComment).replyToCommentId
                    : id
                }
                subCommentId={
                  isSubComment
                    ? id
                    : undefined
                  }
              />
            </div>
          </div>
        </Col>

      </Row>
    </Item>

  );
}
