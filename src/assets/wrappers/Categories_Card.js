import styled from 'styled-components';

const Wrapper = styled.section`
  gap: 3rem;
  display: flex;

  .card_cate_box {
    outline: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    margin: 3.5rem 0 0.1rem 0.1rem;
    .card_box {
      position: relative;
      width: 16.89rem;
      height: 14.5rem;
      background-repeat: no-repeat;
      background-position: top;

      img {
        margin-top: 2.5rem;
      }

      p {
        text-align: center;
        font-size: 16px;
        color: #000;
      }

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
    }
  }

  .card_cate_box:hover {
    border: #db4444;
    outline: none;
  }

  .card_box:hover > .add_card {
    opacity: 1;
    transition: 0.2s;
  }

  .card_box {
    border-radius: 4px;
  }
`;

export default Wrapper;
