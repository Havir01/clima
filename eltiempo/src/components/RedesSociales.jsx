import React from 'react';
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai'

const BoxRdes = styled.div`
    display: flex;
    flex-direction:row;
    width:20%;
    height: 80px;
    margin-top:2em;
    padding-bottom:.1em;
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
const Link = styled.a`
    text-decoration:none;
    list-style:none;
    color: white;
    font-size:30px;
`;
const RedesSociales = () => {
    return (
        <BoxRdes>
            <ListRedes>
                <ItenRed><Link href="#"><AiIcons.AiOutlineFacebook/></Link></ItenRed>
                <ItenRed><Link href="#"><AiIcons.AiOutlineTwitter/></Link></ItenRed>
                <ItenRed><Link href="#"><AiIcons.AiOutlineGoogle/></Link></ItenRed>
                <ItenRed><Link href="#"><AiIcons.AiOutlineInstagram/></Link></ItenRed>
            </ListRedes>
        </BoxRdes>
    );
};

export default RedesSociales;