import React from 'react';
import heart_card from '../assets/images/heart_card.svg';
import eye from '../assets/images/eye.svg';
import Wrapper from '../assets/wrappers/Card';

const Card = ({ images }) => {
  return (
    <Wrapper>
      {images.map((images) => {
        const {
          image,
          title,
          index,
          percent,
          price,
          price_max,
        } = images;
        return (
          <div
            key={index}
            className='card_box'
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className='flex_top_card'>
              <span>{percent}</span>
              <div>
                <img src={heart_card} alt='df' />
              </div>
            </div>
            <div className='eye_card'>
              <img src={eye} alt='df' />
            </div>
            <div className='add_card'>
              <a href='#'>Add To Card</a>
            </div>

            <div className='title_card'>
              <p className='title_card_text'>{title}</p>
              <div className='price'>
                <span>{price}</span>
                <span className='price_max'>
                  {price_max}
                </span>
              </div>
              <span className='star'>star</span>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Card;
