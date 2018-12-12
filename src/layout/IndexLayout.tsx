import * as React from "react";
import Navbar from "@/nav/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/footer/Footer";
import styled from "styled-components";
import GlobalStyle from "@/components/ui/globalStyle";

interface Props {
  children: React.ReactNode;
}

const Content = styled.div`
  margin-top: 83px;
`;

export default function IndexLayout(props: Props) {
  return (
    <>
      <div>
        <Navbar/>
        <Content>
          {props.children}
        </Content>
        <Footer/>
        <GlobalStyle/>
      </div>

    </>
  );
}
