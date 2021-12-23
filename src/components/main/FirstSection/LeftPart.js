import React, { useState } from 'react';
import styled from 'styled-components';
import wakeabird from '../../../image/wakeabird.jpg';
import postBlog from '../../../image/postBlog.jpg';
import suboxReact from '../../../image/suboxReact.jpg';
import port from '../../../image/port.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const LeftPartBlock = styled.div`
  .sildeContainer {
    width: 500px;

    .slide {
      transform: scale(0.5);
      transition: 0.3s;
      opacity: 0.5;

      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border: 1px solid black;
      }
    }
    .activeSlide {
      transform: scale(1, 1);
      transform-origin: 50% 50%;
      opacity: 1;
    }
  }
`;

const LeftPart = () => {
  const slides = [wakeabird, postBlog, suboxReact, port];
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: -20,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <LeftPartBlock>
      <div className="sildeContainer">
        <Slider {...settings}>
          {slides.map((slide, key) => (
            <div
              className={key === imageIndex ? 'slide activeSlide' : 'slide'}
              key={key}
            >
              <img src={slide} alt="img" />
            </div>
          ))}
        </Slider>
      </div>
    </LeftPartBlock>
  );
};
export default LeftPart;
