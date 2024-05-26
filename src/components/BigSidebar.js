import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import arrow_right from "../assets/images/arrow_right.svg";
import phone_hero from "../assets/images/phone_hero.jpg";
import logo_apple from "../assets/images/logo_apple.svg";
import arrow_right2 from '../assets/images/arrow_right2.svg';

const BigSidebar = ({images}) => {

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = 
    autoPlay && 
    setTimeout(() => {
      slideRight();

    },2500)
  })

    const slideRight = () => {
      setCurrent(
        current === images.length - 1 ? 0 : current + 1
      );
    };

     const slideLeft = () => {
       setCurrent(
         current === 0 ? images.length - 1 : current - 1
       );
     };

    

     
  return (
    <Wrapper>
      <div
        className='content'
      
      >
        <ul>
          <li>
            <span>
              <a href='#'>Woman’s Fashion</a>
            </span>
            <img src={arrow_right} />
          </li>
          <li>
            <span>
              <a href='#'>Men’s Fashion</a>
            </span>
            <img src={arrow_right} />
          </li>
          <li>
            <span>
              <a href='#'>Electronics</a>
            </span>
          </li>
          <li>
            <span>
              <a href='#'>Home & Lifestyle</a>
            </span>
          </li>
          <li>
            <span>
              <a href='#'>Medicine</a>
            </span>
          </li>
          <li>
            <span>
              <a href='#'>Sports & Outdoor</a>
            </span>
          </li>
          <li>
            <span>
              <a href='#'>Baby’s & Toys</a>
            </span>
          </li>
          <li>
            <span>
              <a href='#'>Groceries & Pets</a>
            </span>
          </li>
          <li>
            <span>
              <a href='#'>Health & Beauty</a>
            </span>
          </li>
        </ul>
      </div>
      <div
        className='poster'
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        {images.map((image,index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? 'left carousel_card2 carousel_card-active2'
                  : 'left carousel_card2'
              }
            >
              <div className='ip'>
                <img src={logo_apple} />
                <p>iPhone 14 Series</p>
              </div>
              <p className='hero_big_text'>{image.title}</p>
              <div className='shop_now'>
                <a href='#' className='button'>
                  Shop Now
                </a>
                <a href='#'>
                  <img src={arrow_right2} />
                </a>
              </div>
            </div>
          );
        
        })}

        <div className='carousel_wrapper'>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? 'carousel_card carousel_card-active'
                    : 'carousel_card'
                }
              >
                <img
                  src={image.image}
                  className='card_image'
                />
              </div>
            );
          })}

        

          <div className='carousel_pagination'>
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index == current
                      ? 'pagination_dot pagination_dot-active'
                      : 'pagination_dot'
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
