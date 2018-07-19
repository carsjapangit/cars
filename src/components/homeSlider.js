import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
  'images/cars_01.jpg',
  'images/cars_02.jpg',
  'images/cars_03.jpg',
  'images/cars_04.jpg',
  'images/cars_05.jpg',
  'images/cars_06.jpg'
];

function Slideshow(props) {
  return(
        <Zoom
          images={images}
          scale="0.4"
          duration={5000}
          transitionDuration={1000}
        />

)}

export default (Slideshow);
