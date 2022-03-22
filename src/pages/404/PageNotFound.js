import React from 'react';
import { Link } from 'react-router-dom';

import { PageNotFoundItem, PageNotFoundItems, PageNotFoundStyles } from './styles';
import { AppBar } from '../../components/appbar';

function PageNotFound(props) {
  return (
    <>
      <AppBar/>
      <PageNotFoundStyles>
        <h1>Oops, Page not found</h1>
        <PageNotFoundItems>
          <PageNotFoundItem><Link to="dashboard">Return to Dashboard</Link></PageNotFoundItem>
        </PageNotFoundItems>
      </PageNotFoundStyles>
    </>
  );
}

export default PageNotFound;
