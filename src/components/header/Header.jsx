import React from 'react'
import classes from './header.module.css'
import cart from './icons/cart.svg'

// console.log(classes);


const Header = () => {
  return (
    <header className={classes.header}>
   <h2 className={classes.header__title}>TestList</h2>
      <a className={classes.header__link} href="#"> <img  src={cart} alt="cart image" /></a>

    </header>
  )
}

export default Header
