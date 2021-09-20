import React,{useEffect,useState,useContext} from 'react';
import styled from 'styled-components';
import Climas from '../components/Climas';
import ListNoticias from '../components/ListNoticias';
import Titular from '../components/Titular';
import CiudadContex from '../contex/ciudad/CiudadContext';

const Box = styled.div`
    display: flex;
    flex-direction:row;
    width: 100vw;
    justify-content: center;
`;
const InterBox = styled.section`
    display: flex;
    flex-direction:row;
    width: 80vw;
`;
const Seccion1 = styled.section`
    display: flex;
    flex-direction:column;
    width: 65%;
`;
const Seccion2= styled.section`
    display: flex;
    flex-direction:column;
    width: 35%;
`;

const Inicio = () => {
    const {ciudad,getCiudad,getNoticias} = useContext(CiudadContex);
    
    useEffect(() => {
        getCiudad()
        getNoticias(ciudad.city)
    },[ciudad.city])
  
    return (
        <>
            <Box>
               <InterBox>
                  <Seccion1>

                    <Titular/>
                  </Seccion1>
                  <Seccion2>
                    <Climas/>
                  </Seccion2>  
               </InterBox> 
            </Box>
            
            <ListNoticias/>
            
        </>
    );
};

export default Inicio;