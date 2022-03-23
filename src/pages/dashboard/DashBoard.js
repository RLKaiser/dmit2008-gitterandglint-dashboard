import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';
import { DashBoardStyles } from './styles';
import { AppBar } from '../../components/appbar';
import { SideBar } from '../../components/sidebar';
import { Panels } from '../../components/panels';

function DashBoard(props) {
  const [isUser, setIsUser] = useState(false);
  const navigator = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if(user) {
      setIsUser(true);
    } else {
      setIsUser(false);
      navigator('/');
    }
  });

  if(isUser) {
    return ( 
      <>
        <header>
          <AppBar/>
        </header>
        <DashBoardStyles>
          <SideBar/>
          <Panels/>
        </DashBoardStyles>
      </>
    )
  } else {
    return null
  }

}

export default DashBoard;