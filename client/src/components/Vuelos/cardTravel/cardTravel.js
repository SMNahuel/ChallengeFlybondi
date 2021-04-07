import React from 'react';
import s from './cardTravel.module.css';

const CardTravel = ({travel, showTravels, origin}) => {

    return(
        <div className={s.contenedor}>
            <div className={s.cardTravelRow}>
                <div className={s.cardTravelCell}>Destino</div>
                <div className={s.cardTravelCell}>Salida</div>
                <div className={s.cardTravelCell}>Disponible</div>
                <div className={s.cardTravelCell}>Precio</div>
            </div>
            {
                travel && travel.map((travel, index)=> (
                    <div className={s.cardTravel} key={index}>
                        <div className={s.cardTravelRow}>
                            <div className={s.cardTravelCell}>
                                {travel.destination === 'BRC' && 'Bariloche'}
                                {travel.destination === 'MDZ' && 'Mendoza'}
                                {travel.destination === 'COR' && 'Cordoba'}
                                {travel.destination === 'EPA' && 'Buenos Aires'}
                            </div>
                            <div className={s.cardTravelCell}>{travel.data}</div>
                            <div className={s.cardTravelCell}>{travel.availability}</div>
                            <div className={s.cardTravelCell}>${travel.price}</div>
                            <button className={s.cardTravelButton}>Reservar</button>
                        </div> 
                    </div>
                ))
            }
            {
               showTravels && <button className={s.cardTravelButton} onClick={() => showTravels(origin)}>Ver todos</button>
            }

        </div>
    )
}

export default CardTravel;