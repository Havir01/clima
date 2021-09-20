import React,{useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CiudadContex from '../contex/ciudad/CiudadContext';
import cargando from '../img/cargando.gif'
const BoxDerecha = styled.div`
    display: flex;
    flex-direction:row;
    height: 50%;
    background-color:#979595; 
    position:relative;
    img{
        width: 100%;
        z-index:10;
    }
`;
const NewLink= styled(Link)`
    z-index:100;
    position: absolute;
    bottom: 10px;
    left: 20px;
    color:white;
    font-size: 20px;
    font-weight:bold;
    text-shadow: 1px 1px black;
    text-decoration: none;
   
`;

const BannerClima = () => {
    const {noticias} = useContext(CiudadContex);
    
   
    return (
        parseInt(noticias.totalResults)>0
        ?<BoxDerecha>
            <img src={noticias.articles[1].urlToImage}/>
            <NewLink to="/tura">{noticias.articles[1].title}</NewLink>
        </BoxDerecha>
        :<BoxDerecha>
            <img src={cargando}/>
        </BoxDerecha>
    );
};

export default BannerClima;