import * as React from "react";
import Navbar from "@/nav/navbar";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/footer/Footer";

interface Props {
  children: React.ReactNode;
}

export default function IndexLayout(props: Props) {
  return (
    <>
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>
        <Navbar/>
        <div className="content">
          {props.children}
        </div>
        <Footer/>
      </div>
      { /*language=CSS*/ }
      <style jsx>{`
          .content{
          margin-top: 83px;
          }
      `}
      </style>
      {/*language=CSS*/}
      <style jsx global>{`
        .center-vertical {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }

        .pull-right {
          float: right;
        }

        .white {
          color: white;
        }

        body {
          font-size: .875rem;
        }

        .btn-primary {
          background-color: #88c5e1 !important;
          border:none !important;
          box-shadow: 0 .4rem 0 #54abd4, 0 .1rem 0 rgba(255, 255, 255, .5) inset;
          position: relative;
        }
        .btn-primary:hover {
          top:0.2rem;
          color: #fff;
          background-color: #88c5e1;
          box-shadow: 0 .2rem 0 #54abd4, 0 .1rem 0 rgba(255, 255, 255, .5) inset;
        }
        .btn-primary:focus {
          color: #fff;
          box-shadow: 0 .4rem 0 #54abd4, 0 .1rem 0 rgba(255, 255, 255, .5) inset;
          background-color: #88c5e1;

        }
      `}
      </style>
    </>
  );
}
