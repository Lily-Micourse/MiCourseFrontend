import Brand from "~/static/img/Brand-S.png";
import LilyStudio from "~/static/img/LilyStudio.png";
import React from "react";
import FooterBlock from "./FooterBlock";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { ContainerStyle } from "@/components/ui/index";
import FooterInfo from "./FooterInfo";

const StyledFooter = styled.footer`
  padding: 28px 0 18px 0;
  background: #eeece1;
  color: #7d7d7d;
  font-size: .75rem;
  line-height: 1.125rem;
  display: block;
`;

const title1 = "关于米课";
const title2 = "关于小百合工作室";
const context1 = "原由米课团队开发运营，后交由小百合工作室进行全新改版与功能丰富，致力于搭建帮助南大各院系同学选好课程，分享感受，互动交友的校内平台。感谢同学们的大力支持。";
const context2 = "工作室成立于2000年，是由南京大学网络爱好者自发组织的一个学生团体，致力于传播校园网络文化，促进校园网络建设，服务广大同学，并为爱好网络和计算机科学与技术的同学提供一个交流学习、共同提高的平台。";

export default function Footer() {
  return (
    <StyledFooter>
      <ContainerStyle>
        <Row>
          <Col md={6}>
            <FooterBlock brand={Brand} title={title1} context={context1}/>
          </Col>
          <Col md={6}>
            <FooterBlock brand={LilyStudio} title={title2} context={context2} />
          </Col>
        </Row>
        <FooterInfo/>
      </ContainerStyle>
    </StyledFooter>
  );

}
