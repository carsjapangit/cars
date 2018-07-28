import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
import ChevronRight from "@material-ui/icons/ChevronRight";
import CarCard from "./CarCard";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ color:"grey"}}
      onClick={onClick}
    >
    <ChevronRight/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ color:"grey" }}
      onClick={onClick}>
      <ChevronLeft/>
      </div>
  );
}


export default class SimpleSlider extends Component {
  render() {

var settings = {
  nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow />,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots:false
};



    return (
      <div>
        <h2>Recomended Cars For You</h2>
        <Slider {...settings}>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
          <CarCard/>
        </Slider>
      </div>
    );
  }
}
