import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: var(--max-width);
  margin: 14rem auto 5rem auto;
  margin-top: 14rem;

  .content {
    max-width: var(--max-width-content);
    margin: 0 auto;
    padding-bottom: 7rem;
    box-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.3);

    .box_card {
      margin-top: 6rem;

      .flex_card {
        overflow-x: hidden;
        overflow-y: hidden;
        justify-content: flex-start;
        text-align: center;

        div:hover {
          background-color: #db4444;
          img {
            filter: invert(100%) sepia(100%) saturate(0%)
              hue-rotate(0deg) brightness(100%)
              contrast(100%);
          }

          p {
            color: #fff;
          }
        }
      }
    }

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
      display: flex;
      align-items: end;
      margin-top: 2.4rem;
      justify-content: space-between;
      .fl_text {
        font-size: 3.6rem;
        font-weight: 600;
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
