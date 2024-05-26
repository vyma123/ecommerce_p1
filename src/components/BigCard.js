import React from 'react';
import Wrapper from '../assets/wrappers/BigCard';
import loa from '../assets/images/loa.png';
import bac_loa from '../assets/images/bac_loa.png';

const BigCard = () => {
  return (
    <Wrapper>
      <div className='bigcard_box'>
        <div className='bigcard_box_left'>
          <p>Categories</p>
          <h2>Enhance Your Music Experience</h2>
          <div className='time'>gio</div>
          <button>Buy Now</button>
        </div>
        <div
          style={{
            backgroundImage: `url(${bac_loa})`,
          }}
          className='bigcard_box_right'
        >
          <img src={loa} className='img_loa' />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigCard;
