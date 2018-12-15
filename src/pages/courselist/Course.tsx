import * as React from "react";
import { CourseListItem } from "../../models/course/Course";
import { Col, Row } from "reactstrap";
import { FaComment } from "~/node_modules/react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";
import styled from "styled-components";
import { Star } from "@/components/ui/Star";
import Label from "@/components/ui/Label";
import Hexagon from "@/components/ui/Hexagon";
import college from "~/static/icons/college.png";

const StyledStar = styled(Star)`
  width: 13px;
  height: 12px;
  padding-right: 3px;
`;

const TittleLink = styled.a`
  font-size:16px;
  color: #88C5E1!important ;
  cursor:pointer;
  :hover{
    color:#54abd4!important;
  }
`;

const CommentLink = styled.a`
  color: #b5b5b5!important;
  margin-left:5px;
  cursor:pointer;
  :hover{
    color:#54abd4!important;
  }
`;

const ItemHeader = styled.div`
  margin-bottom:2px;
`;

const ItemRate = styled.div`
  margin-bottom:8px;
`;

const ItemLabels = styled.div`
  margin-bottom:10px;
`;

const StyledHexagon = styled(Hexagon)`
`;

export function CourseListItemBox({ course }: { course: CourseListItem }) {
  return (
    <>
      <Row>
        <Col xs={2} sm={1}>
          <StyledHexagon url={course.cover || college} width={44} height={55} />
        </Col>
        <Col xs={10} sm={10}>
          <ItemHeader>
            <Link href={{ pathname: "/course", query: { id: course.id } }}>
              <TittleLink>{course.name}</TittleLink>
            </Link>
            <Link>
              <CommentLink>
                <FaComment />{course.commentNum}
              </CommentLink>
            </Link>
          </ItemHeader>
          <ItemRate>
            <StyledStar rate={course.rate} />
          </ItemRate>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 10, offset: 2 }} sm={{ size: 11, offset: 1 }}>
          <ItemLabels>
            <Label value={course.category} type="category" />
            <Label value={course.credit + "学分"} type="credit" />
            <Label value={course.department} type="department" />
          </ItemLabels>
        </Col>
      </Row>
    </>
  );
}
