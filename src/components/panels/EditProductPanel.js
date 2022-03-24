import React from 'react';

import { PanelsStyles, PanelsItems, PanelsItem, ProductsContainer } from './styles';

function EditProductPanel(props) {
  return ( 
    <PanelsStyles>
      <PanelsItems>
        <PanelsItem>Home {'>'} </PanelsItem>
        <PanelsItem color="525352">Edit Product</PanelsItem>
      </PanelsItems>
      <ProductsContainer>
        <h1>Edit Products</h1>
      </ProductsContainer>
    </PanelsStyles>
   );
}

export default EditProductPanel;