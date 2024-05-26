import styled from 'styled-components';

const Wrapper = styled.section`
  .box_card {
    margin: 0 auto;
    max-width: 117rem;

    .btn_view {
      margin-bottom: 8rem;
      margin-top: 43px;
      text-align: center;
      padding-bottom: 6rem;
      box-shadow: 0 0.1rem 0 0 rgba(0, 0, 0, 0.1);

      button {
        padding: 1.6rem 4.8rem;
        border: none;
        border-radius: 4px;
        background: #db4444;
        color: #fafafa;
        cursor: pointer;
        text-transform: capitalize;
      }

      button:hover {
        background: #db5555;
      }
    }
  }
  .flex_card {
    display: flex;
    gap: 3rem;
    overflow-x: auto;
    height: 37rem;
  }
  .flex_card .item {
    color: red;
    margin-right: 2px;
    width: 30rem;
    height: 11rem;
    background: yellow;
    cursor: pointer;
  }

  .flex_card::-webkit-scrollbar {
    width: 0;
  }
`;

export default Wrapper;
