import React,{useState,useContext} from 'react';
import * as FaIcons from 'react-icons/fi'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CiudadContex from '../contex/ciudad/CiudadContext';
const NavBox = styled.section`
    width: 100vw;
    background-color: #4970db;
    height: 45px;
`;
const NavBar = styled.nav`
    margin: auto;
    width: 80vw;
    background-color: #4970db;
    height: 45px;
    display: flex;
    align-content: space-between    ;
`;
const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 50%;
`;
const Li = styled.li`
   float: left;
`;
const NewLink= styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px 14px 0;
    text-decoration: none;
    &:hover{
        background-color:#111;
    }
`;
const BoxSh = styled.div`
    margin: auto;
    width: 50%; 
    //border: solid 1px;
`;
const Form = styled.form`
    display: flex;
    height: 45px;
    justify-content: flex-end;
    align-items: center;
    color: white;
    label{
        padding: 14px 16px 14px 0;
    }
    input{
        font-size: 15px;
        padding: 2.5px;
        outline: none;
    }
    button{
        font-size: 15px;
        outline: none;
        color: white;
        background-color:transparent;
        border: none;
        font-size: 20px;
        font-weight:bold;
        display: flex;
        &:hover{
            background-color:#ffffff6f;  
            cursor: pointer;
        }
    }
`;

const Nav = () => {
    const {getClima} = useContext(CiudadContex);
    const [valor, setValor] = useState("")
    const buscar =(e)=>{
        e.preventDefault()
        getClima(valor)
    }
    return (
        <NavBox>
            <NavBar>
              <Ul>
                <Li><NewLink href="default">Noticias</NewLink></Li>
                <Li><NewLink href="news">Tiempo</NewLink></Li>
                <Li><NewLink href="contact">Contactos</NewLink></Li>
               
              </Ul>
              <BoxSh>
                <Form>
                    <label htmlFor="">Clima Ciudad</label>
                    <input onChange={(e)=>setValor(e.target.value)} type="text" name="" id="" />
                    <button onClick={buscar}><FaIcons.FiSearch/></button>
                </Form>
              </BoxSh>
            </NavBar>
            
        </NavBox>
    );
};

export default Nav;