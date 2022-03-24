import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'

import { signOut } from 'firebase/auth';
import { auth } from 'libs/firebase';
import { SideBarItems, SideBarContainer, SideBarItem, ToggleHamburger } from './styles';

function SideBar() {
  function showNav() {
    let sideBar = document.querySelector('main ul');
    if (sideBar.style.left === "-100vw") {
      sideBar.style.left = "0";
    } else {
      sideBar.style.left = "-100vw";
    }
  }

  function onLogoutRequest(evt) {
    signOut(auth)
  }

  return ( 
    <aside>
      <ToggleHamburger>
        <GiHamburgerMenu onClick={ showNav }/>
      </ToggleHamburger>
      <SideBarItems>
        <SideBarContainer>
          <SideBarItem>Dashboard</SideBarItem>
        </SideBarContainer>
        <SideBarContainer>
          <SideBarItem>Collections</SideBarItem>
          <SideBarItem><Link to="/dashboard">All Products</Link></SideBarItem>
          <SideBarItem><Link to="add">Add Product</Link></SideBarItem>
          <SideBarItem><Link to="edit">Edit Product</Link></SideBarItem>
          <SideBarItem>Categories</SideBarItem>
          <SideBarItem>Orders</SideBarItem>
          <SideBarItem>Reviews</SideBarItem>
        </SideBarContainer>
        <SideBarContainer>
          <SideBarItem>Suppliers</SideBarItem>
          <SideBarItem>Users</SideBarItem>
        </SideBarContainer>
        <SideBarContainer>
          <SideBarItem>Authentication</SideBarItem>
          <SideBarItem>Other Pages</SideBarItem>
          <SideBarItem onClick={ onLogoutRequest }>Sign Out</SideBarItem>
        </SideBarContainer>
      </SideBarItems>
    </aside>
   );
}

export default SideBar;