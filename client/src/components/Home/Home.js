import React from 'react';
import Navbar from '../Navbar/Navbar';
import Vuelos from '../Origenes/Origenes';

const Home = () =>{

    return(
        <div>
            <Navbar title={"Vuelos desde "}/>
            <Vuelos />
        </div>
    )
}

export default Home;