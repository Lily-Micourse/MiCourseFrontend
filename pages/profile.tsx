import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import UserInfo from "@/pages/user/UserInfo";
import { ContainerStyle } from "@/components/ui/index";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled.div`
  min-height: 100px;
  background-color: #FFFFFF;
  border-radius: 1px 1px 1px 1px;
  box-shadow: 0 14px 10px -10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
`;

const UserPages = styled.div`
  padding-top: 8px;
  background-color: #eeede8;
  color: #7d7d7d;
  font-size: .875rem;
  line-height: 24px;
`;

export default class Profile extends React.Component {
  render() {
    return (
      <IndexLayout>
        <UserPages>
          <ContainerStyle>
            <Row>
              <Col lg={8}>
                <div>
                  <StyledCard>
                    xxx
                  </StyledCard>
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <StyledCard>
                    <UserInfo/>
                  </StyledCard>
                </div>
              </Col>
            </Row>
          </ContainerStyle>
        </UserPages>
        个人主页
      </IndexLayout>
    );
  }
}
