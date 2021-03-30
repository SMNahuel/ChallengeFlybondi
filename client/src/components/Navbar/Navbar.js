import React from 'react';
import style from './Navbar.module.css';

const Navbar = ({title}) => {
    return(
        <div className={style.container}>
            <p>
                {title}
            </p>
        </div>
    )
}

export default Navbar;