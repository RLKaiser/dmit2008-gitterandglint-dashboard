import styled from 'styled-components';

const ToggleHamburger = styled.button`
  background-color: transparent;
  border: none;
  background-color: #C4DDCE;
  width: 100vw;
  text-align: left;
  border-bottom: 4px solid #BED6C7;

  svg {
      fill: #525352;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      margin: 0.5rem 1.25rem;
    }
  @media only screen and (min-width: 700px) {
    display: none;
  }
`

const SideBarItems = styled.ul`
  background-color: #C4DDCE;
  height: 100vh;
  width: 100vw;
  padding-top: 1rem;
  position: fixed;
  top: 107px;
  left: -100vw;
  transition: ease-in-out 0.4s;
  height: 100%;
  z-index: 1;

  @media only screen and (min-width: 700px) {
    position: relative;
    left: 0;
    width: 250px;
    top: 0;
    padding-top: 0;
  }
`;

const SideBarContainer = styled.li`
  border-bottom: 4px solid #BED6C7;
`;

const SideBarItem = styled.li`
  cursor: pointer;
  color: ${props => props.color || "#ffffff"};
  margin-bottom: 0.25rem;
  padding: 0.5rem 1.25rem;

  :hover {
    color: #525352;
  }
  a {
    color: #ffffff;

    :hover {
      text-decoration: none;
      color: #525352;
    }
  }
`;

export { ToggleHamburger, SideBarItems, SideBarContainer, SideBarItem }