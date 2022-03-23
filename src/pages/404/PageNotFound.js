import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';
import { PageNotFoundItem, PageNotFoundItems, PageNotFoundStyles } from './styles';
import { AppBar } from '../../components/appbar';

function PageNotFound(props) {
  const [isUser, setIsUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if(user) {
      setIsUser(true);
    } else {
      setIsUser(false);

    }
  })

  return (
    <>
      <AppBar/>
      <PageNotFoundStyles>
        <h1>Oops, Page not found</h1>
        <PageNotFoundItems>
          <PageNotFoundItem>{ isUser ? <Link to='dashboard'>Return to Dashboard</Link> : <Link to='/'>Return to Login</Link> }</PageNotFoundItem>
        </PageNotFoundItems>
      </PageNotFoundStyles>
    </>
  );
}

export default PageNotFound;
