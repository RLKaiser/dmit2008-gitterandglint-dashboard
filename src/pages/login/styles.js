import styled from 'styled-components';

const LoginPageStyles = styled.section`
  background-color: #ffffff;
  margin: 1rem;
  border-radius: 3px;
  
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
  @media only screen and (min-width: 1400px) {
    max-width: 1400px;
    margin: 3rem auto;
  }
`;

export { LoginPageStyles }