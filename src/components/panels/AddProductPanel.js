import React from 'react';

import { PanelsStyles, PanelsItems, PanelsItem, ProductsContainer } from './styles';

function AddProductPanel(props) {
  return ( 
    <PanelsStyles>
      <PanelsItems>
        <PanelsItem>Home {'>'} </PanelsItem>
        <PanelsItem color="525352">Add Product</PanelsItem>
      </PanelsItems>
      <ProductsContainer>
        <h1>Add Products</h1>
      </ProductsContainer>
    </PanelsStyles>
   );
}

export default AddProductPanel;