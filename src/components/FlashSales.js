import React from 'react';
import Wrapper from '../assets/wrappers/FlashSales';
import arrow_fl_left from '../assets/images/arrow_fl_left.svg';
import arrow_fl_right from '../assets/images/arrow_fl_right.svg';

const FlashSales = (props) => {
  const { scrollLefts, scrollRight } = props;
  return (
    <Wrapper>
      <div className='content'>
        <div className='flex_top'>
          <div className='rectangle'></div>
          <p className='title_cate'>Today’s</p>
        </div>
        <div className='flash_s_box'>
          <h1 className='fl_text'>Flash Sales</h1>
          <div className='fl_time'>
            <div className='time'>
              <span className='text'>Days</span>
              <span className='number'>03</span>
            </div>
            <b className='two_dot'>:</b>
            <div className='time'>
              <span className='text'>Hours</span>
              <span className='number'>23</span>
            </div>
            <b className='two_dot'>:</b>

            <div className='time'>
              <span className='text'>Minutes</span>
              <span className='number'>19</span>
            </div>
            <b className='two_dot'>:</b>

            <div className='time'>
              <span className='text'>Seconds</span>
              <span className='number'>56</span>
            </div>
          </div>
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
