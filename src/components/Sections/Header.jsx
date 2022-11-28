import React from "react";
import styled from "styled-components";
// Components
import Banner from "./Banner";

export default function Header() {
  return ( 
    <Wrapper className="container flexSpaceCenter">
          <Banner/>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 0px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
 `;
