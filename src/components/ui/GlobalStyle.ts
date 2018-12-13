import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    background-color: #EEEDE8;
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
  
`;

export default GlobalStyle;
