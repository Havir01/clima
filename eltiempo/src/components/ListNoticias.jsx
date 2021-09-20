import React,{useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai'
import CiudadContex from '../contex/ciudad/CiudadContext';
import cargando from '../img/cargando.gif'
const BoxItems = styled.div`
    display: flex;
    flex-direction:column;
    width: 100vw;
    align-items: center;
    box-shadow: 1px 1px 5px black;
`;

const Intem = styled.section`
    display: flex;
    flex-direction:row;
    width: 80vw;
    background-color:white;
    box-shadow: 1px 1px 5px black;
    margin-bottom:1em;
   
`;
const Imagen = styled.img`
     width: ${props => props.activa ?30:20}%;
     height:${props => props.activa ?23:20}vh;
     z-index:10;
     //size:auto;

`;
const IntemColun = styled.section`
    display: flex;
    flex-direction:column;
    padding: 10px;
    width: 100%;
    h1{
        margin-top:1em;
    }

`;
const NLink= styled(Link)`
    color:#6b6363;
    font-size: 25px;
    font-weight:lighter;
    text-shadow: 1px 1px black;
    text-decoration: none;
   
`;


const ListNoticias = () => {
    const {noticias} = useContext(CiudadContex);
   
    return (
       
        <BoxItems>
            {
                 parseInt(noticias.totalResults)>0
                 ?noticias.articles.map((item,index)=>(
                    <Intem key= {index}>
                    <Imagen activa={true}  src={item.urlToImage}/>
                    <IntemColun>
                        <p>{item.publishedAt}</p>
                        <NLink to="/">{item.title}</NLink>
                        <BoxRdes>
                           <ListRedes>
                             <ItenRed><Linka href="#"><AiIcons.AiOutlineFacebook/></Linka></ItenRed>
                             <ItenRed><Linka href="#"><AiIcons.AiOutlineTwitter/></Linka></ItenRed>
                             <ItenRed><Linka href="#"><AiIcons.AiOutlineGoogle/></Linka></ItenRed>
                             <ItenRed><Linka href="#"><AiIcons.AiOutlineInstagram/></Linka></ItenRed>
                          </ListRedes>
                        </BoxRdes>
                    </IntemColun>
                  </Intem>
                 )
                 
                 )
                 
               :<Imagen activa={false} src={cargando}/>
            }
            
            
            
        </BoxItems>
    );
};
const BoxRdes = styled.div`
    display: flex;
    flex-direction:row;
    width:20%;
    //height: 50px;
    margin-top:1em;
    align-items: center;
    
`;
const ListRedes = styled.ul`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    width:100%;
`;
const ItenRed = styled.li`
    text-decoration:none;
    list-style:none;
`;
const Linka = styled.a`
    text-decoration:none;
    list-style:none;
    color: #111010;
    font-size:30px;
`;
export default ListNoticias;