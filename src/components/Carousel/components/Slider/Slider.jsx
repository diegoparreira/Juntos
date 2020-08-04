import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 1;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    transform: initial;
    background: ${(props) => props.categoryColor};
    &:before {
      font-size: 50px;
    }
    &:hover{
      color: black;
    }
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 0px;
  }
`;

export const SliderItem = styled.li`
    margin-right: 16px;
    img {
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
    
`;

const Slider = ({ children, categoryColor }) => (
  <Container categoryColor={categoryColor}>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 400,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
