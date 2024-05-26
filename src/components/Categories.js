import React from 'react';
import Wrapper from '../assets/wrappers/Categories';
import arrow_fl_left from '../assets/images/arrow_fl_left.svg';
import arrow_fl_right from '../assets/images/arrow_fl_right.svg';
import { useRef, useState } from 'react';
import { categories_card } from './Data';
import Categories_Card from './Categories_Card';

const Categories = () => {
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
          <p className='title_cate'>Categories</p>
        </div>
        <div className='flash_s_box'>
          <h1 className='fl_text'>Browse By Category</h1>

          <div className='flex_arrow'>
            <button type='button' onClick={scrollLefts}>
              <img src={arrow_fl_left} />
            </button>
            <button type='button' onClick={scrollRight}>
              <img src={arrow_fl_right} />
            </button>
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
            <Categories_Card images={categories_card} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;
