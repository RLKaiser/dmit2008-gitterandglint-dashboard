import React from 'react';

import { PanelsStyles, PanelsItems, PanelsItem, ProductsContainer } from './styles';

function AllProductsPanel(props) {
  return ( 
    <PanelsStyles>
      <PanelsItems>
        <PanelsItem>Home {'>'} </PanelsItem>
        <PanelsItem color="525352">All Products</PanelsItem>
      </PanelsItems>
      <ProductsContainer>
        <h1>All Products</h1>
      </ProductsContainer>
    </PanelsStyles>
   );
}

export default AllProductsPanel;