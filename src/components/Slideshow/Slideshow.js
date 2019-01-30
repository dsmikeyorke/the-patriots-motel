import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import image1 from  './images/1.jpg'
import image2 from  './images/2.jpg'
import image3 from  './images/3.jpg'
import image4 from  './images/4.jpg'

class Slideshow extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
      </Slider>
    );
  }
}

export default Slideshow
