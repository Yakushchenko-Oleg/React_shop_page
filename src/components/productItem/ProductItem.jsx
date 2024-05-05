import React from 'react'
import classes from './productItem.module.css'

import star from './star.png'
import cart from './cart.svg'
import itemImage from './louis-vuitton--M43186_PM2_Front view 1.svg'


  const ProductItem = ({product}) => {
    
    return (
      <div className={classes.item}>
        <div className={classes.item__image_wraper}>
          <div className={classes.item__rating}>
            <img src={star} alt="Logo star of products raiting" />
            <h3>{product.rating}</h3>
          </div>
          <img className={classes.item__image} src={itemImage} alt="proguct image" />
          <img className={classes.item__cart_icon} src={cart} alt="cart image" />        
        </div>
        <h2 className={classes.item__title}>{product.title}</h2>
        <p className={classes.item__price}>{`${product.price} $`}</p>
      </div>
    )
  }

export default ProductItem
