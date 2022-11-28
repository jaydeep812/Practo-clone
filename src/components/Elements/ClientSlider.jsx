import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import Doctor from "../../assets/img/clients/doctor.svg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Wrapper>
      <h1 className= "font40 extraBold">Consult top doctors online for any health concern</h1>
      <p className="font15">Private online consultations with verified doctors in all specialists</p>
      </Wrapper>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Doctor} alt="client logo" />
          <p className="doctor-para">Period doubts or pregnancy</p>
          <p className="doctor-para blue">Consult Now</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Doctor} alt="client logo" />
          <p className="doctor-para">Acne, pimple or skin issues</p>
          <p className="doctor-para blue">Consult Now</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Doctor} alt="client logo" />
          <p className="doctor-para">Performance <br/>issues in bed</p>
          <p className="doctor-para blue">Consult Now</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Doctor} alt="client logo" />
          <p className="doctor-para">Cold, cough or fever</p>
          <p className="doctor-para blue" >Consult Now</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Doctor} alt="client logo" />
          <p className="doctor-para">Child not feeling well</p>
          <p className="doctor-para blue" >Consult Now</p>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Doctor} alt="client logo" />
          <p className="doctor-para">Depression or anxiety</p>
          <p className="doctor-para blue">Consult Now</p>
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding : 10px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 3%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding : 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;