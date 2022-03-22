import styled from 'styled-components';

const PageNotFoundStyles = styled.div`
  padding: 1rem;
`;  

const PageNotFoundItems = styled.ul`
`;

const PageNotFoundItem = styled.li`
  padding: 0.5rem 0;
  text-decoration: underline;
  cursor: pointer;

  a {
    color: #525352;

    :hover {
      color: #BED6C7;
    }
  }
`;

export { PageNotFoundStyles, PageNotFoundItems, PageNotFoundItem }