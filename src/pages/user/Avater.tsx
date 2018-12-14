import { FaPen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Link from 'next/link'
import styled from "styled-components";

interface Props {
  avater: string;
  height: number;
}

const AvaterStyled = styled.div`
  display: inline-block;
`;

const Overlay = styled.div`
  width: ${({ height }) => height * 0.8}px;
  height: ${({ height }) => height}px;
  overflow: hidden;
`;

const Box = styled(Overlay)`
  transform: rotate(${({ rotate }) => rotate}deg);
  -webkit-transform: rotate(${({ rotate }) => rotate}deg);
  visibility: visible;
`;

const BoxT = styled(Box)`
  background: no-repeat 50% center;
  background-size: 125% auto;
  background-image: url(${({ src }) => src});
`;

export default function Avater(props: Props) {

  return (
    <AvaterStyled>
      <Box rotate={120} height={props.height}>
        <Box rotate={-60} height={props.height}>
          <BoxT src={props.avater} rotate={-60} height={props.height}>
            <Overlay>
              <Link href={} replace>
                <a>
                <FaPen />
                </a>
              </Link>
            </Overlay>
          </BoxT>
        </Box>
      </Box>
    </AvaterStyled>
  );

}
