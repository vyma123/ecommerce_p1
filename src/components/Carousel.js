import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Wrapper from '../assets/wrappers/Carousel';
import { useState, useRef } from 'react';
import Card from '../components/Card';
import FlashSales from './FlashSales';
import { card_images } from './Data';

const Carousels = () => {
  const carouselContainerRef = useRef(null);

  const scrollLefts = () => {
    // Cuộn sang trái
    carouselContainerRef.current.scrollBy({
      left: -220,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    // Cuộn sang phải
    carouselContainerRef.current.scrollBy({
      left: 220,
      behavior: 'smooth',
    });
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(
      e.pageX - carouselContainerRef.current.offsetLeft
    );
    setScrollLeft(carouselContainerRef.current.scrollLeft);
  };

  const stopDragging = (event) => {
    setIsDragging(false);
  };

  const onDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x =
      e.pageX - carouselContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    carouselContainerRef.current.scrollLeft =
      scrollLeft - walk;
  };

  return (
    <Wrapper>
      <FlashSales
        scrollLefts={scrollLefts}
        scrollRight={scrollRight}
      />
      <div className='box_card'>
        <div
          className='flex_card'
          ref={carouselContainerRef}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={onDragging}
        >
          <Card images={card_images} />
        </div>
        <div className='btn_view'>
          <button type='button'>View All Products</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Carousels;
