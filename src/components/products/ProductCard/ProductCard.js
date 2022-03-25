import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { ProductCardStyles, ProductCardCustomize, ProductCardContent, Price, ProductCardProperties } from './styles';
import Amethyst from './../../../static/Amethyst.jpg'

function ProductCard({children, ...props}) {
  return (
    <ProductCardStyles  {...props}>
      <ProductCardCustomize>
        <AiFillDelete/>
        <Link to="/dashboard/edit"><AiFillEdit/></Link>
      </ProductCardCustomize>
      <img src={ Amethyst } alt="Amethyst product"/>
      <ProductCardContent>
        <h2>Amethyst</h2>
        <Price>$13.99 / ea</Price>
        <ProductCardProperties>
          <h3>Properties:</h3>
          <p>Relieves stress and strain, soothes irritability, balances mood swings. Dissolves negativity.</p>
        </ProductCardProperties>
      </ProductCardContent>
    </ProductCardStyles>
  );
}

export default ProductCard