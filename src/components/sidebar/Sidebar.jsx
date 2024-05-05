import React from 'react'
import classes from './sidebar.module.css'
// console.log(classes);


const Sidebar = ({categories}) => {
  const title ='Каталог'

  
  return (
    
  <div className={classes.sideBar}>
    <h1 className={classes.sideBar__title}>{title}</h1>
    <nav className={classes.sideBar__nav}>
      <ul>
        {
         (categories && categories.length>0) ? 
          categories.map((cat, index) => 

          <li 
            className={index===0? classes.active : ''}
            key={Math.random()} >
            {cat}
          </li>
        ) 
      : <li>No categories</li>
          
        }
        
        </ul>
    </nav>
  </div>
  )
}

export default Sidebar
