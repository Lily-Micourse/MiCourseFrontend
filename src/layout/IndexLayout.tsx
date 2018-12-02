import * as React from "react";
import Navbar from "@/nav/Navbar";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  children: React.ReactNode;
}

export default function IndexLayout(props: Props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Head>
      <Navbar/>
      {props.children}
    </div>
  );
}
