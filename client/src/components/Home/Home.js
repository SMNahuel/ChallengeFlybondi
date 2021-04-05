import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Home.module.css';
import Carrusel from '../Carousel/Carousel.js';
import { useQuery } from '@apollo/client';
import { SEARCH_DESTINATION, SEARCH_ORIGIN } from "../../GraphQL/Queries";

const Home = () =>{
    const { error, loading, data } = useQuery(SEARCH_DESTINATION);

    const [state, setState]= useState({
        mount: '',
        origin: '',
        date: ''
    })
    const [travels, setTravels] = useState('')
    const fechaHoy = new Date();

    useEffect(() => {
        if (data) {
          console.log(data)
        }
    });

    const onChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        /* PidiendoDatos() */
    }
    return(
        <div>
            <Navbar title={"Vuelos segun tu presupuesto"}/>
            <div className={style.container}>
                <div className={style.searchContainer}>
                    {/* Tendremos el buscador y la lista de busqueda */}
                    <form onSubmit={onSubmit}>
                    <div className={style.container_inputs}>
                        <input
                            type="text"
                            name="mount"
                            autoComplete="off"
                            onChange={onChange}
                            value={state.mount}
                            maxLength="100"
                            placeholder="Ingrese el monto"
                            pattern="[0-9]{3,100}"
                            required />
                        <label>Ingrese el monto disponible</label>
                    </div>
                    <div className={style.container_inputs}>
                        <select
                            type="text"
                            name="origin"
                            onChange={onChange}
                            autoComplete="off"
                            value={state.origin}
                            maxLength="100"                            
                            placeholder="Ingrese el origen"
                            required >
                            <option value="EPA">Buenos Aires</option>
                            <option value="MDZ">Mendoza</option>
                            <option value="COR">Cordoba</option>
                            <option value="BRC">Bariloche</option>
                   
                        </select>
                        <label>Ingrese el origen</label>
                    </div>
                    <div className={style.container_inputs}>
                        <input
                            type="date"
                            min={fechaHoy}
                            name="date"
                            onChange={onChange}
                            autoComplete="off"
                            alue={state.date}
                            maxLength="100"
                            placeholder="Ingrese el origen"
                            pattern="[A-Za-z0-9 ]{5,100}"
                            required />
                        <label>Fecha a viajar</label>
                    </div>
                    <input

                    type="submit"
                    value='Bucar' />
                    </form>
                </div>
                <div className={style.discountContainer}>
                    <div className={style.discountCard}>
                        {/* Mostaremos el carrusell */}
                        <Carrusel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;