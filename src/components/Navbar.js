import React from "react";
import Wrapper from '../assets/wrappers/Navbar';
import { FaAngleDown } from 'react-icons/fa';
import search_button from '../assets/images/button_search.svg';
import heart_nav from '../assets/images/heart_nav.svg';
import cart_nav from '../assets/images/cart_nav.svg';



const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='top-header'>
          <div className='top-header-right'>
            <div className='top-header-center'>
              <p>
                Summer Sale For All Swim Suits And Free
                Express Delivery - OFF 50%!
              </p>
              <a href='https://facebook.com'>ShopNow</a>
            </div>
            <div className='box-lang'>
              <p>English</p>
              <FaAngleDown className='select-lang' />
            </div>
          </div>
        </div>

        <div className='header'>
          <div className='content-header'>
            <a className='logo' href='http://localhost:3001'>
              Phuong Thao Shop
            </a>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Sign Up</a>
              </li>
            </ul>

            <div className='flex-search'>
              <div className='search-header'>
                <input
                  className='search-input'
                  placeholder='What are you looking for?'
                />
                <a href='#'>
                  <img src={search_button} />
                </a>
              </div>
              <div className='right_search'>
                <a href='#'>
                  <img
                    src={heart_nav}
                    className='heart_nav'
                  />
                </a>
                <a href='#'>
                  <img
                    src={cart_nav}
                    className='cart_nav'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
