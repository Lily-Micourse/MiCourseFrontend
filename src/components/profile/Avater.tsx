import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import DefaultAvater from "~/static/img/default-avatar.png";

export default function Avater() {

  const style = "background-image: url(" + DefaultAvater + ")";

  return (
    <>
      <div className="profile-avatar">
        <div className="info-icon">
          <div className="box-f">
            <div className="box-s">
              <div className="box-t img-responsive">
                <div className="overlay">
                  <Link href="/profile">
                    <a>
                      <span className="glyphicon glyphicon-pencil" aria-hidden="true"/>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*language=CSS*/}
      <style jsx>{`

        .profile-avatar {
          padding: 0;
          margin-bottom: 10px;
        }

        .info-icon {
          display: inline-block;
          width: 84px;
        }

        .box-f {
          float: left;
          margin-left: 10px;
          transform: rotate(120deg);
          -ms-transform: rotate(-60deg);
          -moz-transform: rotate(-60deg);
          -webkit-transform: rotate(120deg);
        }

        .box-s {
          transform: rotate(-60deg);
          -ms-transform: rotate(-60deg);
          -moz-transform: rotate(-60deg);
          -webkit-transform: rotate(-60deg);
        }

        .box-t {
          transform: rotate(-60deg);
          background: no-repeat 50% center;
          background-size: 125% auto;
          -ms-transform: rotate(-60deg);
          -moz-transform: rotate(-60deg);
          -webkit-transform: rotate(-60deg);
          visibility: visible;
        }

        .overlay {
          width: 64px;
          height: 80px;
          overflow: hidden;
          transition: all 0.25s ease-in-out;
          display: none;
          position: relative;
        }

        .overlay a {
          transition: all 0.25s ease-in-out;
          display: inline-block;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -16px 0 0 -16px;
          text-align: center;
          line-height: 32px;
          width: 32px;
          height: 32px;
          text-decoration: none;
          color: White;
          font-size: 1.125rem;
          font-weight: bolder;
        }

      `}</style>
    </>
  );
}
