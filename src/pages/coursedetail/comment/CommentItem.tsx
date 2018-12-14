import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Link from "next/link";
import { Comment } from "@/models/course/CourseComment";

interface Props {
  comment: Comment;
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
  const { userId, nickname, content, time } = comment;
  return (
    <Item>
      <Row>
        <Col className="hidden-sm" md={1}>
        </Col>
        <Col xs={12} md={11}>
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
          </div>
        </Col>

      </Row>
    </Item>

  )
}

