import React, { useState } from 'react'
import classes from './dropdown.module.css'

const Dropdown = ({ categories, onSelect }) => {

    const [isToggle, setIsToggle] = useState(false);
    const activeLabel = categories && categories.find(item => item.selected)?.label;

    return (
        <div className={classes.dropdown}>
            <div className={classes.dropdown__content}>
                <div className={classes.dropdown__label} onClick={() => setIsToggle(!isToggle)} > <span>Сортировать по:  {activeLabel}</span><span>{!isToggle ? '+' : '-'}</span>
                </div>
                {
                    isToggle && (
                        <div className={classes.dropdown__content}>
                            <ul>
                                {
                                categories && categories.map(item => (
                                    <li 
                                        key={item.id}
                                        onClick={()=> {onSelect(item); setIsToggle(!isToggle)}}
                                        >
                                        {item.label}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    )
                }            
            </div>

        </div>
    )
}
export default Dropdown