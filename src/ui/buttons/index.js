import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.width || "100%"};
    background-color: ${props => props.bgcolor || "#525352"};
    border: none;
    border-radius: ${props => props.radius || "3px"};
    margin: ${props => props.margin || "1rem 0"};
    padding: ${props => props.padding || "0.5rem 2rem"};
    color: ${props => props.text || "#fff"};
    font-size: ${props => props.size || "1.125rem"};
    cursor: pointer;

    :hover {
        color: ${props => props.text || "#C4DDCE"};
    }
`;

const Link = styled.button`
    color: #C4DDCE;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
    
    :hover {
        color: #BED6C7;
    }
`;

export { Button, Link }