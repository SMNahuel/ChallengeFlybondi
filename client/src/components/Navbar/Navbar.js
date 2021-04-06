import React from 'react';
import style from './Navbar.module.css';

const Navbar = ({title}) => {
    return(
        <div className={style.container}>
            <h1> Vuela desde</h1>
        </div>
    )
}

export default Navbar;