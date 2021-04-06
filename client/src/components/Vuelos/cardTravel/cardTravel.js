import React from 'react';
import s from './cardTravel.module.css';

const CardTravel = ({travel}) => {
    return(
        <div className={s.contenedor}>
            <div className={s.cardTravelRow}>
                <div className={s.cardTravelCell}>Destino</div>
                <div className={s.cardTravelCell}>Salida</div>
                <div className={s.cardTravelCell}>Disponible</div>
                <div className={s.cardTravelCell}>Precio</div>
            </div>
            {
                travel && travel.map(travel => (
                    <div className={s.cardTravel}>
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
                            
                        </div> 
                        <input className={s.cardTravelButton} type="button" placeholder="Reservar"/>
                    </div>
                ))
            }
        </div>
    )
}

export default CardTravel;