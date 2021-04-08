import React from 'react';
import s from './style.module.css';
import BRC from '../../../img/Ciudades/BRC.png';
import EPA from '../../../img/Ciudades/EPA.jpg';
import MDZ from '../../../img/Ciudades/MDZ.jpg';
import COR from '../../../img/Ciudades/COR.jpg';


const CardOrigen = ({origen}) => {
    return(
        <div>
            {
                origen === "MDZ" && 
                    <div className={s.cardOrigen}>
                        <p>Mendoza</p>
                        <img src={MDZ} width="500px" height="500px" alt="Imagen ilustrativa"/>
                    </div>
            }
            {
                origen === "BRC" && 
                    <div className={s.cardOrigen}>
                        <p>Bariloche</p>    
                        <img src={BRC} width="500px" height="500px" alt="Imagen ilustrativa"/>
                    </div>
            }
            {
                origen === "COR" && 
                    <div className={s.cardOrigen}>
                        <p>Cordoba</p>    
                        <img src={COR} width="500px" height="500px" alt="Imagen ilustrativa"/>
                    </div>
            }
            {
                origen === "EPA" && 
                    <div className={s.cardOrigen}>
                        <p>Buenos Aires</p>    
                        <img src={EPA} width="500px" height="500px" alt="Imagen ilustrativa"/>
                    </div>
            }
        </div>
    )
}

export default CardOrigen;

