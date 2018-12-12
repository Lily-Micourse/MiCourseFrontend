import * as React from "react";
import Section from "@/components/ui/Section";
import { Col, Row } from "reactstrap";

interface Props {
  info: {
    id: string;
    name: string;
    rate: number;
    type: string;
    credit: number;
    department: string;
    cover: string;
  };
}

export default function Overview({ info }: Props) {
  return (
    <Section>
      <Row>
        <Col xs={12} sm={8} md={8} lg={8}>
          <div
            style={{
              height: 322,
              paddingTop: 52.5,
            }}
          >
            <h3>{info.name}</h3>

          </div>
        </Col>
      </Row>
    </Section>
  );
}
