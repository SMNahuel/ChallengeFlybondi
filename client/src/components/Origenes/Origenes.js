import React from 'react';
import s from './style.module.css';
import { useQuery } from '@apollo/client';
import { SEARCH_ORIGIN } from "../../GraphQL/Queries";
import CardOrigen from './cardOrigen/cardOrigen';

const Origenes = () => {
    const { error, loading, data } = useQuery(SEARCH_ORIGIN);

    return(
        <div className={s.contenedor}>
            {
                loading && <p>Cargando</p>
            }
            {
                data && data.searchOrigin.map(origen => (
                    <CardOrigen key={origen} origen={origen}/>
                ))
            }
            {
                error && <p>Upps errores</p>
            }
        </div>
    )
}

export default Origenes;