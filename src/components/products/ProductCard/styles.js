import styled from 'styled-components';

const ProductCardStyles = styled.div`
    max-width: 250px;
    border: 2px solid #F9F9F9;
    border-radius: 3px;
    color: #525352;
    position: relative;

    img {
        border-radius: 2px 2px 0 0;
    }
`;

const ProductCardCustomize = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 92%;
  
  svg {
      cursor: pointer;
      color: #525352;
  }
`;

const ProductCardContent = styled.div`
  padding: 1rem;
  text-align: center;

  h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
  }
`;

const Price = styled.p`
  color: #C4DDCE;
    border-top: 3px solid #C4DDCE;
    border-bottom: 3px solid #C4DDCE;
    padding: 0.5rem;
    font-size: 1.5rem;
`;

const ProductCardProperties = styled.div`
  border-top: 2px solid #F9F9F9;
  text-align: left;

  h3 {
    margin: 0.5rem 0;
    font-size: 1.125rem;
  }
`;

export { ProductCardStyles, ProductCardCustomize, ProductCardContent, Price, ProductCardProperties }