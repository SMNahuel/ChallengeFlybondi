import React from 'react';
import s from './completeTravel.module.css';

const CompleteTravel = ({travelGo, travelBack}) =>{
    return(
        <div clasName={s.container}>
            <div className={s.infoTravelGo}>
                <h2>Infomación pasaje de IDA</h2>
                <p>{travelGo.data}</p>
                <p>{travelGo.destination}</p>
                <p>{travelGo.origin}</p>
                <p>${travelGo.price}</p>

            </div>
            <div className={s.infoTravelBack}>
                <h2>Informacion pasaje de VUELTA</h2>
                <p>{travelBack.data}</p>
                <p>{travelBack.destination}</p>
                <p>{travelBack.origin}</p>
                <p>${travelBack.price}</p>

            </div>
            <div className={s.botones}>

            </div>
        </div>
    )

}

export default CompleteTravel;