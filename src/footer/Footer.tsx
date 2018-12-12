import MediaQuery from "react-responsive";
import Brand from "~/static/img/Brand-S.png";
import LilyStudio from "~/static/img/LilyStudio.png";
import breakpoints from "@/utils/breakpoints";
import React from "react";
import FooterBlock from "./FooterBlock";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const FooterContainer = styled.div`
  font-size: .75rem;
  text-align: center;
  line-height: 1.125rem;
  padding: 0 15px 0 15px;
`;

const StyledFooter = styled.footer`
  a {
    color: #7d7d7d;
    text-decoration: none;
    cursor: pointer;
    margin: 0 2px 0 2px;
  }

  p {
    margin: 0;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  @media (min-width: 768px){
    .footer-container {
      width: 750px;
    }
  }

  @media (max-width: 992px) {
    .footer-block {
      width: 100%;
    }
  }

  @media (min-width: 992px){
    .footer-container {
      width: 970px;
    }
    .footer-block {
      width: 50%;
    }
  }

  @media (min-width: 1200px){
    .footer-container {
      width: 1170px;
    }
  }

    padding: 28px 0 18px 0;
    background: #eeece1;
    color: #7d7d7d;
    font-size: .75rem;
    line-height: 1.125rem;
    display: block;

  .footer-container {
    margin-right: auto;
    margin-left: auto;
  }

  .footer-block {
    position: relative;
    min-height: 1px;
    padding: 0 15px 12px 15px;
  }
`;

const title1 = "关于米课";
const title2 = "关于小百合工作室";
const context1 = "原由米课团队开发运营，后交由小百合工作室进行全新改版与功能丰富，致力于搭建帮助南大各院系同学选好课程，分享感受，互动交友的校内平台。感谢同学们的大力支持。";
const context2 = "工作室成立于2000年，是由南京大学网络爱好者自发组织的一个学生团体，致力于传播校园网络文化，促进校园网络建设，服务广大同学，并为爱好网络和计算机科学与技术的同学提供一个交流学习、共同提高的平台。";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Row>
          <Col md={6}>
            <FooterBlock brand={Brand} title={title1} context={context1}/>
          </Col>
          <Col md={6}>
            <FooterBlock brand={LilyStudio} title={title2} context={context2} />
          </Col>
        </Row>
        <div className="footer-info">
          <p>
            <a href="http://www.nju.edu.cn">南大首页</a>
            <a href="http://jw.nju.edu.cn">南大教务</a>
            <a role="button" href="#" data-toggle="modal" data-target="#modal-feedback">意见反馈</a>
            <a className="special-link" href="/sorter/">米课分一分^ ^</a>
          </p>
          <p>Designed & developed by CPC, Hane, ZingSS, SuperLatte, Christine & Polaris.</p>
          <p>Copyright &copy; Lily Studio, 2015-2018</p>
        </div>
      </FooterContainer>
    </StyledFooter>
  );

}
