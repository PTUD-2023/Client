import React from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner0 from 'src/assets/Images/banner-0.png';
import banner1 from 'src/assets/Images/banner-1.jpg';
import banner2 from 'src/assets/Images/banner-2.jpg';
import banner3 from 'src/assets/Images/banner-3.png';




const MySlider: React.FC = () => {
    const images = [
        banner0, banner1, banner2, banner3
      ];
  
    const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 1500,
    };
  
    return (
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex mt-[20px] mb-[20px] items-center justify-center">
              <img src={image} alt={`Slide ${index + 1}`} className="h-[400px] object-cover mx-auto rounded-[10px] border-none" />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default MySlider;
