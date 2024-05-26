import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Wrapper from '../assets/wrappers/ExploreProducts';
import { useState, useRef } from 'react';
import Card from '../components/Card';
import Explore from './Explore';
import { card_images } from './Data';
import { card_images2 } from './Data';
import { card_images3 } from './Data';

const ExploreProducts = () => {
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
      <Explore
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
          <div className='flex_card_content'>
            <Card images={card_images2} />
            <Card images={card_images3} />
          </div>
        </div>
        <div className='btn_view'>
          <button type='button'>View All Products</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExploreProducts;
