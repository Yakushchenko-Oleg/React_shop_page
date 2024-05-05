import React from 'react'
import classes from './productPage.module.css'
import ProductItem from '../productItem/ProductItem'


const ProductPage = ({productList}) => {
  return (
    <div className={classes.productPage}>
      {
        productList && productList.map(product => <ProductItem product={product}/>)
      }
    </div>
  )
}

export default ProductPage
