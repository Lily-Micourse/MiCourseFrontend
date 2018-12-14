import styled from "styled-components";
import LimitedWidthDiv from "@/layout/LimitedWidthDiv";
import breakpoints from "@/utils/breakpoints";

const ContainerStyle = styled(LimitedWidthDiv)`
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${breakpoints.md}){
    width: 750px;
  }

  @media (min-width: ${breakpoints.lg}){
    width: 970px;
  }

  @media (min-width: ${breakpoints.xl}){
    width: 1170px;
  }
`;

export default ContainerStyle;
