import styled from 'styled-components';

const Wrapper = styled.nav`
  max-width: var(--max-width);
  margin: 0 auto;


  .nav-center{
    padding: 0 0 1.6rem 0;
    box-shadow: 0 0.1rem 0 0 rgba(0, 0, 0, 0.1);
  }

  .top-header-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    max-width: 550px;
    margin: 0 auto 0 31rem;
    p {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
    a {
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      text-decoration: underline;
    }
  }

  .top-header {
    height: 4.8rem;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    .top-header-right {
      width: var(--max-width-content);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .box-lang {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      p {
        color: #fff;
        font-size: 14px;
      }
      .select-lang {
        fill: #fff;
        font-size: 2rem;
      }
    }
  }

  .header {
  }

  .content-header {
    max-width: var(--max-width-content);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 4rem;

    .logo {
      font-size: 2.4rem;
      color: var(--text-primary);
      font-weight: 700;
    }

    ul {
      max-width: 550px;
      margin: 0 auto 0 19rem;
      display: flex;
      align-items: center;
      gap: 4.8rem;

      li {
        a {
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--text-primary);
          display: inline-block;
          border-bottom: 2px solid transparent;
          transition: border-color 0.15s ease 0.15s;
        }

        a:hover {
          border-color: var(--text-primary);
        }
      }
    }
    .search-input {
      font-size: 1.6rem;
      padding: 1rem;
      outline: none;
      border: none;
      background-color: #f5f5f5;
    }

    .search-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3.4rem;
      background: #f5f5f5;
      height: 3.8rem;

      input {
        padding: 0 0 0 2rem;
        max-width: 19.3rem;
      }

      input::placeholder{
        color: var(--text-primary);
        font-size: 1.2rem;
        font-weight: 400;
        opacity: 0.5;
      }

      a {
        padding: 0.7rem 1.6rem 0.7rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
    }

    .right_search{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.2rem;

      .heart_nav{
        width: 2rem;
      }

      .cart_nav{
        width: 2.3rem;
      }

    }

    .flex-search{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }
  }
`;

export default Wrapper;