import React from 'react';
import styled from 'styled-components'
import * as FaIcons from 'react-icons/si'
import { Link } from 'react-router-dom';

const ConteLog= styled(Link)`
    width:20%;
    padding-top:1em;
    padding-bottom:.1em;
    margin-right:2em;
    text-decoration:none;
    color: white;
`;

const ConteSpam= styled.span`
   margin-bottom:0px;
   color:#fdfdfd;
   font-weight: bold;
`;
const ConteHq= styled.h1`
   margin:0px;
   padding:0px;
   font-size:3em;
`;
const Twolog= styled.div`
  display: flex;
`;
const Carlog= styled.span`
  display: flex;
  color: #fdff6b;
  align-content:center;
  align-items:flex-start;
`;

const Logo = () => {
    return (
        <ConteLog to="/">
            <ConteSpam >Tiempo</ConteSpam> 
            <Twolog>
                <ConteHq>Noticias</ConteHq>
                <Carlog><FaIcons.SiApachesolr/></Carlog>
            </Twolog>
            
        </ConteLog>
    );
};

export default Logo;