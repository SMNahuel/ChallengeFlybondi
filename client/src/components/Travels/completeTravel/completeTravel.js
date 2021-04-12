import React from 'react';
import s from './completeTravel.module.css';

const CompleteTravel = ({travelGo, travelBack}) =>{
    return(
        <div clasName={s.container}>
            <div className={s.infoTravelGo}>
                <h2>Infomación pasaje de IDA</h2>
                        {travelGo.destination === 'BRC' && 'Bariloche '}
                        {travelGo.destination === 'MDZ' && 'Mendoza '}
                        {travelGo.destination === 'COR' && 'Cordoba '}
                        {travelGo.destination === 'EPA' && 'Buenos Aires '}
                ({travelGo.destination})
                <p>{travelGo.data}</p>
                        {travelGo.origin === 'BRC' && 'Bariloche '}
                        {travelGo.origin === 'MDZ' && 'Mendoza '}
                        {travelGo.origin === 'COR' && 'Cordoba '}
                        {travelGo.origin === 'EPA' && 'Buenos Aires '}
                ({travelGo.origin})
                <p>${travelGo.price}</p>

            </div>
            {
                travelBack &&   
                <div>
                    <div className={s.infoTravelBack}>
                        <h2>Informacion pasaje de VUELTA</h2>
                        {travelBack.destination === 'BRC' && 'Bariloche '}
                        {travelBack.destination === 'MDZ' && 'Mendoza '}
                        {travelBack.destination === 'COR' && 'Cordoba '}
                        {travelBack.destination === 'EPA' && 'Buenos Aires '}
                        ({travelBack.destination})
                <p>{travelBack.data}</p>
                        {travelBack.origin === 'BRC' && 'Bariloche '}
                        {travelBack.origin === 'MDZ' && 'Mendoza '}
                        {travelBack.origin === 'COR' && 'Cordoba '}
                        {travelBack.origin === 'EPA' && 'Buenos Aires '}
                ({travelBack.origin})
                <p>${travelBack.price}</p>

                </div>
                <div className={s.botones}>
                    <h2>Total a pagar: $ {travelBack.price + travelGo.price}</h2>
                </div>
            </div>
            }

            <button className={s.cardTravelButton} onClick={() => alert("Muchas gracias por su compra")}>
                Aceptar
            </button>
            <br/>
            <button className={s.cardTravelButton} onClick={() => window.location.reload()}>
                Cancelar
            </button>
        </div>
    )

}

export default CompleteTravel;