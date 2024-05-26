import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Wrapper from '../assets/wrappers/BestSellingProducts';
import { useState, useRef } from 'react';
import Card from '../components/BestSellingProducts_Card';
import { card_images_selling } from './Data';

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
      <div className='content'>
        <div className='flex_top'>
          <div className='rectangle'></div>
          <p className='title_cate'>This Month</p>
        </div>
        <div className='flash_s_box'>
          <h1 className='fl_text'>Best Selling Products</h1>

          <div className='flex_arrow'>
            <button>View All</button>
          </div>
        </div>

        <div className='box_card'>
          <div
            className='flex_card'
            ref={carouselContainerRef}
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={onDragging}
          >
            <Card images={card_images_selling} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Carousels;
