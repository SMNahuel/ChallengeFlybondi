import React from 'react';
import s from './style.module.css';
import BRC from '../../../img/Ciudades/BRC.jpg';
import EPA from '../../../img/Ciudades/EPA.jpg';
import MDZ from '../../../img/Ciudades/MDZ.png';
import COR from '../../../img/Ciudades/COR.jpg';
import Vuelos from '../../Vuelos/Vuelos';

const CardOrigen = ({origen}) => {
    return(
        <div>
            {
                origen === "MDZ" && 
                    <div className={s.cardOrigen}>
                        <img src={MDZ} width="500px" height="500px"/>
                        <div className={s.text}>
                            Mendoza
                        </div>
                        <Vuelos origen={origen}/>
                    </div>
            }
            {
                origen === "BRC" && 
                    <div className={s.cardOrigen}>
                        <img src={BRC} width="500px" height="500px"/>
                        <div className={s.text}>
                            Bariloche
                        </div>
                        <Vuelos origen={origen}/>
                    </div>
            }
            {
                origen === "COR" && 
                    <div className={s.cardOrigen}>
                        <img src={COR} width="500px" height="500px"/>
                        <div className={s.text}>
                            Cordoba
                        </div>
                        <Vuelos origen={origen}/>
                    </div>
            }
            {
                origen === "EPA" && 
                    <div className={s.cardOrigen}>
                        <img src={EPA} width="500px" height="500px"/>
                        <div className={s.text}>
                            Buenos Aires
                        </div>
                        <Vuelos origen={origen}/>
                    </div>
            }
        </div>
    )
}

export default CardOrigen;

