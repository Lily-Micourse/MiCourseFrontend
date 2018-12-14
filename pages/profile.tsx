import * as React from "react";
import IndexLayout from "@/layout/IndexLayout";
import MainProfile from "@/components/profile/MainProfile";

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <IndexLayout>
          <div className="common-container">
            <div className="row">
              <div className="section section-r">
                <div className="section-content">
                  <MainProfile/>
                </div>
              </div>
              <div className="section section-l">
                <div className="section-content">
                </div>
              </div>
            </div>
          </div>
          个人主页
        </IndexLayout>
        {/*language=CSS*/}
        <style>{`



        `}</style>
        {/*language=CSS*/}
        <style jsx global>{`

          .content {
            background-color: #eeede8;
            padding-top: 8px;
          }

          .section-content {
            min-height: 100px;
            background-color: #FFFFFF;
            border-radius: 1px 1px 1px 1px;
            box-shadow: 0 14px 10px -10px rgba(0,0,0,0.1);
          }

          .section {
            padding: 0 15px 0 15px;
            margin: 0 0 20px 0;
            position: relative;
          }

          @media (max-width: 992px) {
            .section {
              width: 100%;
            }
          }

          @media (min-width: 992px){
            .section-r {
              width: 33.33%;
              left: 66.66%;
            }
            .section-l {
              width: 66.66%;
              right: 33.33%;
            }
          }

        `}
        </style>
      </>
    );
  }
}
