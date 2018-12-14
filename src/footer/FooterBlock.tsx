import { Media } from "reactstrap";

interface Props {
  brand: string;
  title: string;
  context: string;
  className?: string;
}

export default function FooterBlock(props: Props) {

  const basicClass = "pairing-block";
  const className = props.className ? basicClass + " " + props.className : basicClass;

  return (
    <>
      <div className={className}>
        <Media>
          <Media left>
            <Media src={props.brand} alt="logo" />
          </Media>
          <Media body>
            <Media heading>
              {props.title}
            </Media>
            {props.context}
          </Media>
        </Media>
      </div>
      {/*language=CSS*/}
      <style jsx>{`

        .media-body {
          padding-left: 2%;
        }

        .media-body h4 {
          color: #666;
          padding: 3px 0 7px 0;
          font-size: .875rem;
          margin-bottom: 0;
        }

        .media-left {
          max-width: 100%;
          width: 10%;
          float: left;
        }

        .media-left img {
          border-radius: 6px;
          width: 100%;
          height: auto;
          display: block;
        }

        .pairing-block {
          position: relative;
          min-height: 1px;
          padding: 0 15px 12px 15px;
        }

        @media (max-width: 992px) {
          .pairing-block {
            width: 100%;
          }
        }

        @media (min-width: 992px){
          .pairing-block {
            width: 50%;
          }
        }

      `}
      </style>
    </>
  );

}
