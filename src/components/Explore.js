import React from 'react';
import Wrapper from '../assets/wrappers/Explore';
import arrow_fl_left from '../assets/images/arrow_fl_left.svg';
import arrow_fl_right from '../assets/images/arrow_fl_right.svg';

const FlashSales = (props) => {
  const { scrollLefts, scrollRight } = props;
  return (
    <Wrapper>
      <div className='content'>
        <div className='flex_top'>
          <div className='rectangle'></div>
          <p className='title_cate'>Our Products</p>
        </div>
        <div className='flash_s_box'>
          <h1 className='fl_text'>Explore Our Products</h1>

          <div className='flex_arrow'>
            <button type='button' onClick={scrollLefts}>
              <img src={arrow_fl_left} />
            </button>
            <button type='button' onClick={scrollRight}>
              <img src={arrow_fl_right} />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FlashSales;
