import React from 'react';
import Navbar from '../Navbar/Navbar';
import Origins from '../Origins/Origins';

const Home = () =>{

    return(
        <div>
            <Navbar title={"Vuelos desde "}/>
            <Origins />
        </div>
    )
}

export default Home;