import React from 'react';

import { PanelsStyles, PanelsItems, PanelsItem, ProductsContainer } from './styles';
import { ProductCard } from './../products/ProductCard';

function AllProductsPanel(props) {
  return ( 
    <PanelsStyles>
      <PanelsItems>
        <PanelsItem>Home {'>'} </PanelsItem>
        <PanelsItem color="525352">All Products</PanelsItem>
      </PanelsItems>
      <ProductsContainer>
        <h1>All Products</h1>
        <ProductCard/>
      </ProductsContainer>
    </PanelsStyles>
   );
}

export default AllProductsPanel;