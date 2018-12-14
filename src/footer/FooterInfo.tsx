import styled from "styled-components";

const StyledFooterInfo = styled.div`
  font-size: .75rem;
  text-align: center;
  line-height: 1.125rem;
  padding: 0 15px 0 15px;
  
  a {
    color: #7d7d7d;
    text-decoration: none;
    cursor: pointer;
    margin: 0 2px 0 2px;
  }

  p {
    margin: 0;
  }
  
`;

export default function FooterInfo() {

  return (
    <StyledFooterInfo>
      <p>
        <a href="http://www.nju.edu.cn">南大首页</a>
        <a href="http://jw.nju.edu.cn">南大教务</a>
        <a role="button" href="#" data-toggle="modal" data-target="#modal-feedback">意见反馈</a>
        <a className="special-link" href="/sorter/">米课分一分^ ^</a>
      </p>
      <p>Designed & developed by CPC, Hane, ZingSS, SuperLatte, Christine & Polaris.</p>
      <p>Copyright &copy; Lily Studio, 2015-2018</p>
    </StyledFooterInfo>
  );

}
