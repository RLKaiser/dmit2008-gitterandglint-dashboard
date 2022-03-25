import React from 'react';

import { PanelsStyles, PanelsItems, PanelsItem, ProductsContainer } from './styles';
import { ProductCard } from './../products/ProductCard';

function AddProductPanel(props) {
  return ( 
    <PanelsStyles>
      <PanelsItems>
        <PanelsItem>Home {'>'} </PanelsItem>
        <PanelsItem color="525352">Add Product</PanelsItem>
      </PanelsItems>
      <ProductsContainer>
        <h1>Add Products</h1>
        <ProductCard/>
      </ProductsContainer>
    </PanelsStyles>
   );
}

export default AddProductPanel;