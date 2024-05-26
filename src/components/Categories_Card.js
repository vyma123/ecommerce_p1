import React from 'react';
import heart_card from '../assets/images/heart_card.svg';
import eye from '../assets/images/eye.svg';
import Wrapper from '../assets/wrappers/Categories_Card';

const Card = ({ images }) => {
  return (
    <Wrapper>
      {images.map((images) => {
        const { image, title, index } = images;
        return (
          <div className='card_cate_box'>
            <a href='#'>
              <div key={index} className='card_box'>
                <img src={image} />
                <p>{title}</p>
              </div>
            </a>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Card;
