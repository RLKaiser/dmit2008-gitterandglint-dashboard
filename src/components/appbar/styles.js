import styled from 'styled-components';

const AppBarStyles = styled.nav`
    padding: 1rem;
    background-color: #C4DDCE;
    border-bottom: 4px solid #BED6C7;

    div {
        display: flex;
        gap: 0.5rem;
    }
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItem = styled.li`
    cursor: pointer;
    
    img {
        max-width: 1.5rem;
    }
    a {
        color: #525352;
        :hover {
            text-decoration: none;
            color: #525352;
        }
    }
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export { AppBarStyles, AppBarItems, AppBarItem }