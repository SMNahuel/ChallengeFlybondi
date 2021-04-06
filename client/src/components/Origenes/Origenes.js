import React from 'react';
import s from './style.module.css';
import { useQuery } from '@apollo/client';
import { SEARCH_ORIGIN } from "../../GraphQL/Queries";
import CardOrigen from './cardOrigen/cardOrigen';
import Vuelos from '../Vuelos/Vuelos';

const Origenes = () => {
    const { error, loading, data } = useQuery(SEARCH_ORIGIN);

    return(
        <div className={s.contenedor}>
            {
                loading && <p>Cargando</p>
            }
            {
                data && data.searchOrigin.map(origen => (
                    <div>
                        <CardOrigen key={origen} origen={origen}/>
                        <Vuelos origen={origen}/>
                    </div>
                    
                ))
            }
            {
                error && <p>Upps errores</p>
            }
        </div>
    )
}

export default Origenes;