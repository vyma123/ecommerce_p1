import styled from 'styled-components';

const Wrapper = styled.section`
  gap: 3rem;
  display: flex;
  .card_box {
    position: relative;
    width: 27rem;
    height: 25rem;
    background: #f5f5f5;
    background-repeat: no-repeat;
    background-position: center;

    .flex_top_card {
      display: flex;
      padding: 1.2rem 1.2rem 0.8rem 1.2rem;
      align-items: center;
      justify-content: space-between;
      span {
        background: #db4444;
        padding: 0.4rem 1.2rem;
        color: #fafafa;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
      }

      img {
        width: 16px;
      }

      div {
        display: flex;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        padding: 10px 9px;
      }
    }
    .eye_card {
      float: right;
      margin: 0 1.2rem 0 0;
      background: #fff;
      padding: 10px 7.39px;
      border-radius: 50%;
      display: flex;
      align-items: center;

      img {
        width: 19.23px;
      }
    }

    .add_card {
      opacity: 0;
      position: absolute;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;

      a {
        padding: 0.8rem 0;
        display: block;
        font-size: 1.6rem;
        font-weight: 500;
        color: #fff;
        background: #000;
        text-transform: capitalize;
      }
    }

    .title_card {
      margin-top: 22rem;

      .title_card_text {
        font-size: 1.6rem;
        font-weight: 500;
        color: #000;
      }

      .price {
        display: flex;
        gap: 1.2rem;
        font-size: 16px;
        font-weight: 500;
        color: #db4444;
        margin-top: 0.8rem;
        margin-bottom: 0.8rem;

        .price_max {
          color: #000;
          opacity: 0.5;
        }
        .price_max:after {
          border-bottom: 1px solid #000;
          display: block;
          margin-top: -1.1rem;
          content: ' ';
          width: auto;
        }
      }
    }
  }

  .card_box:hover > .add_card {
    opacity: 1;
    transition: 0.2s;
  }
`;

export default Wrapper;
