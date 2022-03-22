import styled from 'styled-components';

const LoginPageStyles = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  .Toastify__toast {
    position: absolute;
    top: 0.5rem;
    left: 4rem;
    width: 300px;
    border-radius: 3px;
    border: 2px solid red;
    background-color: #F9F9F9;
    padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .Toastify__toast-body {
      display: flex;
      gap: 1rem;
    }
    .Toastify__close-button {
      background-color: transparent;
      width: 2rem;
      border: none;
    }
  }
`;

const LoginPageContainer = styled.div`
  background-color: #ffffff;
  border-radius: 3px;
  margin: 1rem;

  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }
  div:nth-child(1) {
    padding: 3rem 2rem;
  }
  div:nth-child(2) {
    background-color: #C4DDCE;
    border-radius: 0 3px 3px 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 600px;
    }
  }

  @media only screen and (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    margin: 3rem;

    div:nth-child(1) {
      padding: 5rem 2rem;
      p {
        margin-bottom: 5rem;
      }
    }
    div {
      min-height: 88vh;
      width: 50%;
      padding: 1rem;
    }
  }
`;

export { LoginPageStyles, LoginPageContainer }