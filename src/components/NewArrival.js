import React from 'react';
import Wrapper from '../assets/wrappers/NewArrival';

const NewArrival = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='flex_top'>
          <div className='rectangle'></div>
          <p className='title_cate'>Featured</p>
        </div>
        <div className='flash_s_box'>
          <h1 className='fl_text'>New Arrival</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewArrival;
