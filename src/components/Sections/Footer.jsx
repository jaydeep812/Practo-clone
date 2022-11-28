import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "C:/Users/jayde/my-app/src/components/Sections/og-image-consumer.png";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <img src={LogoImg} alt="logo"></img>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13"></span> All Right Reserved
            </StyleP>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color:#263077;
`;
const InnerWrapper = styled.div`
background-color:#263077;
  @media (max-width: 550px) {
    flex-direction: column;
  
  }
`;
const StyleP = styled.p`
background-color:#263077;
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;