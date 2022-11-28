import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <HeaderInfo>
            <h1 className="font38 extraBold">Read top articles from health experts</h1>
            <p className="font15">Health articles that keep you informed about good health practices and achieve your goals.</p>
          </HeaderInfo>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Corornavirus"
                text="12 Coronavirus Myths and Facts that you should be aware of"
                tag=""
                author="Dr.Diana Borgio"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Vitamins and Supplements"
                text="Eating Right to Build Immunity Against Cold and Viral Infections"
                tag=""
                author="Dr.Diana Borgio"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What our users have to say</h1>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;