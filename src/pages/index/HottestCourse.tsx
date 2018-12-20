import React from "react";
import { Section } from "@/components/ui";
import { CourseListItem } from "@/models/course/Course";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import Hexagon from "@/components/ui/Hexagon";
import Link from "next/link";
import Label from "@/components/ui/Label";
import { CourseType, CourseQueryType } from "@/models/course/CourseQuery";
import breakpoints from "@/utils/breakpoints";
import { Rate } from "@/components/ui/Rate";
import PrimaryLink from "@/components/ui/Link";

const Card = styled.div`
  background-color:#f5f5f5;
  text-align: center;
  padding: 52px 16px;
  box-shadow: 0 1px 2px #ddd;
  margin-bottom: 20px;
`;

const CardIcon = styled.div`
  display: inline-block;
  margin-bottom:10px;
`;

const CardTittle = styled(PrimaryLink)`
    font-size: 1.125rem;
    font-weight:600;
`;


const CardLabels = styled.div`
  margin-top:15px;
  @media (min-width: ${breakpoints.lg}) and (max-width:${breakpoints.lgMax}){
    display:none;
  }
`;

const CardRate = styled.div`
  margin-top:5px;
`

const CardBottom = styled.div`
  margin-top:5px;
  color:#7d7d7d;
  font-size:.75rem;
`;

const CommentLink = styled(PrimaryLink)`
  margin-left:5px;
`;


function CourseCard({ course }: { course: CourseListItem }) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Card>
        <CardIcon>
          <Hexagon url={course.cover} width={44} height={55} />
        </CardIcon>
        <div>
          <Link href={{ pathname: "/course", query: { id: course.id } }}>
            <CardTittle>{course.name}</CardTittle>
          </Link>
        </div>
        <CardLabels>
          <Label value={course.category} type={CourseQueryType.CATEGORY} />
          <Label value={course.department} type={CourseQueryType.DEPARTMENT} />
        </CardLabels>
        <CardRate>
          <Rate rate={course.rate} />
        </CardRate>
        <CardBottom>
          <span>{course.credit}学分</span>
          <Link href={{ pathname: "/course", query: { id: course.id } }}>
            <CommentLink>{course.commentNum}评论</CommentLink>
          </Link>
        </CardBottom>
      </Card>
    </Col>
  )
}


const MoreLink = styled(PrimaryLink)`
  color:#7d7d7d;
  margin-left:10px;
`

export default function HottestCourse({ list }: { list: CourseListItem[] }) {
  return (
    <Section>
      <h4>最热课程排行榜
        <small>
          <Link href="/course">
            <MoreLink>更多>></MoreLink>
          </Link>
        </small>
      </h4>
      <Row>
        {list.map(x => <CourseCard key={x.id} course={x} />)}
      </Row>
    </Section>
  );
}
