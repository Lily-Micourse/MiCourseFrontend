import * as React from "react";
import Navbar from "@/nav/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function IndexLayout(props: Props) {
  return (
    <div>
      <Navbar/>
      {props.children}
    </div>
  );
}
