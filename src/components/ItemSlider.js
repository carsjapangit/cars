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

    const cards = [];

    const cardSkeleton = {label1:"Stock Id",
                          label2:"Maker",
                          label3:"Model",
                          label4:"Year",
                          label5:"Seats",
                          label6:"Availability"};
    const carDetailList = [
                          {val1:"6940",
                          val2:"TOYOTA",
                          val3:"COROLLA AXIO",
                          val4:"2014/04",
                          val5:"5",
                          val6:"AVAILABLE"},
                          {val1:"6941",
                          val2:"TOYOTA",
                          val3:"COROLLA AXIO",
                          val4:"2014/04",
                          val5:"5",
                          val6:"AVAILABLE"},
                          {val1:"6942",
                          val2:"TOYOTA",
                          val3:"COROLLA AXIO",
                          val4:"2014/04",
                          val5:"5",
                          val6:"AVAILABLE"},
                          {val1:"6943",
                          val2:"TOYOTA",
                          val3:"COROLLA AXIO",
                          val4:"2014/04",
                          val5:"5",
                          val6:"AVAILABLE"},
                          {val1:"6940",
                          val2:"TOYOTA",
                          val3:"COROLLA AXIO",
                          val4:"2014/04",
                          val5:"5",
                          val6:"AVAILABLE"}];

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

carDetailList.forEach((carDetail) =>{
  cards.push(<CarCard key="carDetail.val1" cardSkeleton={cardSkeleton}
                      cardData={carDetail}/>);
});



    return (
      <div>
        <h2>Recomended Cars For You</h2>
        <Slider {...settings}>
        {cards}
        </Slider>
      </div>
    );
  }
}
