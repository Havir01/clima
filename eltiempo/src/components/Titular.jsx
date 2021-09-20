import React,{useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CiudadContex from '../contex/ciudad/CiudadContext';
import cargando from '../img/cargando.gif'

const BoxIzquierda = styled.div`
    display:flex;
    height: 70vh;
    background-color:#ffffff;
    margin: 10px 10px 10px 0;
    position: relative;
    justify-content: center;
    align-items:center;
    
`;
const Imagen = styled.img`
     width: ${props => props.activa ?100:30}%;
     height:${props => props.activa ?70:20}vh;
     z-index:10;
     //size:auto;

`;
const NewLink= styled(Link)`
    z-index:100;
    position: absolute;
    bottom: 10px;
    left: 20px;
    color:white;
    font-size: 30px;
    font-weight:bold;
    text-shadow: 1px 1px black;
    text-decoration: none;
   
`;

const Titular = () => {
    const {noticias} = useContext(CiudadContex);
    
    console.log(noticias)
    return (
        parseInt(noticias.totalResults)>0
        ?<BoxIzquierda>
            <Imagen activa={true} src={noticias.articles[0].urlToImage}/>
            <NewLink to="/">{noticias.articles[0].title}</NewLink>
        </BoxIzquierda>
        :<BoxIzquierda>
           <Imagen activa={false} src={cargando}/>
        </BoxIzquierda>
    );
};

export default Titular;