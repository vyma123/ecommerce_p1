import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: var(--max-width);
  margin: 14rem auto 0 auto;
  margin-top: 14rem;

  .content {
    max-width: var(--max-width-content);
    margin: 0 auto;

    .flex_top {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      .rectangle {
        width: 2rem;
        height: 4rem;
        background: #db4444;
        border-radius: 0.4rem;
      }

      .title_cate {
        font-size: 1.6rem;
        color: #db4444;
        font-weight: 600;
      }
    }

    .flash_s_box {
      margin-bottom: 4rem;
      display: flex;
      align-items: end;
      margin-top: 2.4rem;
      .fl_text {
        font-size: 3.6rem;
        font-weight: 600;
        width: 21.1rem;
        line-height: 1;
        margin-right: 8.7rem;
      }
      .fl_time {
        display: flex;
        margin-right: 47rem;

        .time {
          display: flex;
          flex-direction: column;

          .text {
            font-size: 1.2rem;
            font-weight: 500;
          }

          .number {
            font-size: 3.2rem;
            font-weight: 700;
            line-height: 1;
            margin-top: 0.4rem;
          }
        }

        .two_dot {
          margin: 2rem 1.7rem 0 1.7rem;
          font-size: 1.5rem;
          color: #e07575;
        }
      }

      .flex_arrow {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        button {
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #f5f5f5;
          cursor: pointer;
          width: 4.6rem;
          height: 4.6rem;

          img {
            border-radius: 50%;
            padding: 1.6rem 1.5rem;
          }
        }
      }
    }
  }
`;

export default Wrapper;
