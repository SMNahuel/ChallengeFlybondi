import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Vuelos from '../Origenes/Origenes';

const Home = () =>{

    return(
        <div>
            <Navbar title={"Vuelos segun tu presupuesto"}/>
            <Vuelos />
        </div>
    )
}

export default Home;