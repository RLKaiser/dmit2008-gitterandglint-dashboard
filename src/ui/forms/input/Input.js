import styled from 'styled-components';

const Input = styled.input`
  width: ${props => props.width || "100%"};
  border: ${props => props.border || "1px solid #BED6C7"};
  border-radius: ${props => props.radius || "3px"};
  font-size: ${props => props.fs || "1rem"};
  padding: ${props => props.padding || "0.25rem 0.25rem"};
  margin-bottom: ${props => props.marginBottom || "0.5rem"};
  background-color: ${props => props.bgc || "#fff"};

  :focus {
    border: 2px solid #C4DDCE;
  }
`;

export { Input }