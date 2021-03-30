import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import style from './Home.module.css';
import Carrusel from '../Carousel/Carousel.js';
import { useQuery, gql } from '@apollo/client';
import { GET_TRAVELS, GET_ORIGIN } from "../../GraphQL/Queries";

const Home = () =>{
    const { error, loading, data } = useQuery(GET_ORIGIN);
    const [state, setState]= useState({
        mount: '',
        origin: ''
    })
    const fechaHoy = new Date();
    useEffect(() => {
        if (data) {
          console.log(data)
        }
    }, [data]);
    return(
        <div>
            <Navbar title={"Vuelos segun tu presupuesto"}/>
            <div className={style.container}>
                <div className={style.searchContainer}>
                    {/* Tendremos el buscador y la lista de busqueda */}
                    <form>
                    <div className={style.container_inputs}>
                        <input
                            type="text"
                            name="concept"
                            autoComplete="off"
                            maxLength="100"
                            placeholder="Ingrese el monto"
                            pattern="[0-9]{5,100}"
                            required />
                        <label>Ingrese el monto disponible</label>
                    </div>
                    <div className={style.container_inputs}>
                        <select
                            type="text"
                            name="concept"
                            autoComplete="off"
                            maxLength="100"                            placeholder="Ingrese el origen"
                            required >
                            <option value="Buenos Aires">Buenos Aires</option>
                            <option value="Ingresos">Ingresos</option>
                            <option value="Egresos">Egresos</option>
                   
                        </select>
                        <label>Ingrese el origen</label>
                    </div>
                    <div className={style.container_inputs}>
                        <input
                            type="date"
                            min={fechaHoy}
                            name="concept"
                            autoComplete="off"
                            maxLength="100"
                            placeholder="Ingrese el origen"
                            pattern="[A-Za-z0-9 ]{5,100}"
                            required />
                        <label>Fecha a viajar</label>
                    </div>
                    </form>
                        <button >
                            Buscar
                        </button>
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