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

  constructor(props){
    super(props);
    this.state ={productList : []};
  }
  componentDidMount() {
    fetch('http://localhost:3000/v1/product',{
      headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE1NTIwMTc5MDcsImV4cCI6MTU1MjAyNzkwN30.pjWCXHmrWb6c-W7ZsokJotdry_2cyzLdgGcz3tXAJF8',
      }})
      .then(res => {
          console.log(res);
          return res.json()
       })
      .then(res => { 
          console.log(res); 
          this.setState(res)
       });
   }

  render() {

    const cards = [];

    const cardSkeleton = {label1:"Stock Id",
                          label2:"Maker",
                          label3:"Model",
                          label4:"Year",
                          label5:"Seats",
                          label6:"Availability"};
      const carDetailList = [];

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

this.state.productList.forEach((carDetail) =>{
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
