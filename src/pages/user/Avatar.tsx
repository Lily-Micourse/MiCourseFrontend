import * as React from "react";
import { FaPen, FaUser } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import { IconContext } from "react-icons";
import Router from "next/router";

interface Props {
  avater: string;
  height: number;
}

interface State {
  visibility: boolean;
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

const IconOverlay = styled(Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  :hover {
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.25s ease-in-out;
  }
`;

export default class Avatar extends React.Component<Props, State> {

  state = {
    visibility: false,
  };

  toggle = () => {
    this.setState({
      visibility: !this.state.visibility,
    });
  }

  settings = () => {
    Router.push("/settings");
  }

  render() {
    return (
      <AvaterStyled>
        <Box rotate={120} height={this.props.height}>
          <Box rotate={-60} height={this.props.height}>
            <BoxT src={this.props.avater} rotate={-60} height={this.props.height}>
              <IconContext.Provider value={{color: "white", size: this.props.height * 0.2 + "px", style: { visibility: this.state.visibility ? "visible" : "hidden" }}}>
                <IconOverlay height={this.props.height} onMouseOver={this.toggle} onMouseOut={this.toggle} onClick={this.settings}>
                  <FaPen/>
                </IconOverlay>
              </IconContext.Provider>
            </BoxT>
          </Box>
        </Box>
      </AvaterStyled>
    );
  }

}
