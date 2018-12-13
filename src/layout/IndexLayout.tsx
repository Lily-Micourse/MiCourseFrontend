import * as React from "react";
import Navbar from "@/nav/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/footer/Footer";
import styled from "styled-components";
import { GlobalStyle } from "@/components/ui";
import { Container } from "reactstrap";

interface Props {
  children: React.ReactNode;
  noTopPadding?: boolean;
}

const Content = styled.div`
  margin-top: ${({ noTopPadding }) => noTopPadding ? 64 : 84}px;
`;

export default function IndexLayout(props: Props) {
  return (
    <div>
      <Navbar/>
      <Content noTopPadding={props.noTopPadding}>
        {props.children}
      </Content>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
}
