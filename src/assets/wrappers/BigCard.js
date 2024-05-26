import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto 7.1rem auto;
  max-width: var(--max-width-content);

  .bigcard_box {
    display: flex;
    align-items: center;
    gap: 2.7rem;
    background: #000;
    height: 50rem;

    .bigcard_box_left {
      margin-left: 5.6rem;

      p {
        color: #00ff66;
        font-size: 16px;
        font-weight: 600;
      }

      h2 {
        margin-top: 3.2rem;
        font-size: 48px;
        font-weight: 600;
        color: #fafafa;
        width: 443px;
        letter-spacing: 1px;
      }

      .time {
        height: 6.2rem;
        margin-bottom: 4rem;
        margin-top: 3.2rem;
        color: red;
      }

      button {
        color: #fff;
        font-size: 16px;
        background: #00ff66;
        padding: 16px 48px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    .bigcard_box_right {
      background-position: 76% 50%;
      height: 50.4rem;
      background-repeat: no-repeat;

      img {
        width: 100%;
        margin-top: 4rem;
      }
    }
    span {
      color: red;
    }
  }
`;
export default Wrapper;
