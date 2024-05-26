import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  max-width: 117rem;
  margin: 0 auto;

  .content {
    ul {
      width: 23.3rem;
      padding-right: 1.6rem;
      box-shadow: 0.1rem 0 0 0 rgba(0, 0, 0, 0.1);
      padding-top: 4rem;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          a {
            font-size: 1.6rem;
            font-weight: 400;
            color: var(--text-primary);
          }
        }
        margin-bottom: 1.6rem;
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }

  .poster {
    width: 100%;
    height: 34.4rem;
    background: #000;
    margin: 4rem 0 0 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;

    .left {
      padding-left: 6.4rem;
      transition: 0.5s ease-in;
      z-index: 9999 !important;

      .ip {
        display: flex;
        align-items: center;
        gap: 2.4rem;
        margin-bottom: 2rem;

        p {
          font-size: 1.6rem;
          font-weight: 400;
        }
      }

      .hero_big_text {
        font-size: 4.8rem;
        font-weight: 600;
        width: 29.4rem;
      }

      .button {
        font-size: 1.6rem;
        font-weight: 500;
        border-bottom: 1px solid #fff;
        padding-bottom: 0.4rem;
        z-index: 9999;
      }

      .shop_now {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
    }

    p {
      color: #fff;
    }
    a {
      color: #fff;
    }
    img {
      overflow: hidden;
      max-width: 100%;
    }
  }

  .carousel_wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .carousel_card {
    display: flex;
    flex: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8);
    transition: 0.5s ease-in-out;
  }

  .carousel_card2 {
    flex: 1;
    opacity: 0;
    position: absolute;
  }

  .carousel_card-active2 {
    opacity: 1;
    transform: scale(1);
    pointer-events: visible;
  }

  .carousel_card-active {
    opacity: 1;
    transform: scale(1);
    pointer-events: visible;
  }

  .card_image {
    width: 100%;
    object-fit: cover;
  }

  .carousel_pagination {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .pagination_dot {
    height: 10px;
    width: 10px;
    background-color: #f9f9f9;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
  }

  .pagination_dot:hover {
    transform: scale(1.2);
  }

  .pagination_dot-active {
    background-color: #db4444;
    border: #fff 2px solid;
  }
`;

export default Wrapper;