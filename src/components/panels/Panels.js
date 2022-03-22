import React from 'react';

import { PanelsStyles, PanelsItems, PanelsItem, AllProductsContainer } from './styles';

function Panels(props) {
  return ( 
    <PanelsStyles>
      <PanelsItems>
        <PanelsItem>Home {'>'}</PanelsItem>
        <PanelsItem color="525352">All Products</PanelsItem>
      </PanelsItems>
      <AllProductsContainer>
        <h1>All Products</h1>
      </AllProductsContainer>
    </PanelsStyles>
   );
}

export default Panels;