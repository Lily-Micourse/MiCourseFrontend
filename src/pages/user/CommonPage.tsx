import * as React from "react";
import { ContainerStyle, CardStyle, PagesStyle } from "@/components/ui/index";
import { Row, Col } from "reactstrap";
import MediaQuery from "react-responsive";
import breakpoints from "@/utils/breakpoints";

interface Props {
  children: React.ReactNode;
}

export default function CommonPage(props: Props) {

  let childrenRight;

  const childrenLeft = React.Children.map(props.children, (child, i) => {
    if (i < 1) { childrenRight = child; return; }
    return child;
  });

  return (
    <PagesStyle>
      <ContainerStyle>
        <MediaQuery minWidth={breakpoints.lg}>
          <Row>
            <Col lg={8}>
              <CardStyle>
                {childrenLeft}
              </CardStyle>
            </Col>
            <Col lg={4}>
              <CardStyle>
                {childrenRight}
              </CardStyle>
            </Col>
          </Row>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.lg}>
          <CardStyle>
            {childrenRight}
          </CardStyle>
          <CardStyle>
            {childrenLeft}
          </CardStyle>
        </MediaQuery>
      </ContainerStyle>
    </PagesStyle>
  );
}
