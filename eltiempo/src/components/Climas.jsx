import React,{useEffect,useContext} from 'react';
import styled from 'styled-components';
import ImageClim from '../img/cloud.png'
import BannerClima from './BannerClima';
import CiudadContex from '../contex/ciudad/CiudadContext';
const BoxDerecha = styled.div`
    display: flex;
    flex-direction:column;
    height: 70vh;
    background-color:#ffffff;
    margin: 10px;
`;

const Clima = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 50%;
    background:url(${ImageClim});
    margin-bottom: 5px;
`;
const Encabezado = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 30%;
    justify-content:space-between;
    padding:10px;
    color: white;
    text-shadow: 1px 1px black;
`;
const Body = styled.div`
     display: flex;
     flex-direction:row;
     width: 100%;
     height: 40%;
     justify-content: center;
     
     h1{
         font-size: 70px;
     }
     span{
             font-size: 20px;
             display: flex;
            
            align-content:center;
            align-items:flex-start;
         }
     
`;
const Temperaturas = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 30%;
`;
const Tempe = styled.div`
    display: flex;
    flex-direction:column;
    height:100%;
    margin-right:20px;
    div{
        display: flex;
        height:100%;
        flex-direction:row;
        justify-content: center;
        align-items: center;
    }
   
`;


const Climas = () => {
    const {ciudad,clima,getClima} = useContext(CiudadContex);
    
    useEffect(() => {
        getClima(ciudad.city)
    }, [ciudad.city])
    return (
        <BoxDerecha>
            <Clima>
                <Encabezado>
                    <h1>{clima.main ?clima.name:""}</h1>  
                    <h1>viento: {clima.main ?clima.wind.speed:""} k/h</h1>  
                </Encabezado>
                <Body>
                    <h1>{clima.main ?(parseFloat(clima.main.temp) - 273.15).toFixed(1):""}</h1>
                    <span>°C</span>
                </Body>
                <Temperaturas>
                    <Tempe>
                    <h1>Maxima</h1>
                     <div>
                        <h1>{clima.main ?(parseFloat(clima.main.temp_max) - 273.15).toFixed(1):""}</h1>
                        <span>°C</span>
                     </div>
                    </Tempe>
                    <Tempe>
                    <h1>Minima</h1>
                     <div>
                        <h1>{clima.main ?(parseFloat(clima.main.temp_min) - 273.15).toFixed(1):""}</h1>
                        <span>°C</span>
                     </div>
                    </Tempe>
                    <Tempe>
                    <h1>Humedad</h1>
                     <div>
                        <h1>{clima.main?clima.main.humidity:""}</h1>
                        <span>%</span>
                     </div>
                    </Tempe>
                </Temperaturas>
            </Clima>
            <BannerClima/>   
        </BoxDerecha>
    );
};

export default Climas;