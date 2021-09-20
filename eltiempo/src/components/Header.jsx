import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import RedesSociales from './RedesSociales';

const HeaderBox = styled.header`
    width: 100vw;
    background-color:#2A3744;
    display: flex;
    flex-direction:column;
    align-items: center;
    
`;
const IntoBox = styled.div`
    display: flex;
    width: 80vw;
    //border:1px solid #fff;
    justify-content: space-between;

`;

const Header = () => {
    return (
        <HeaderBox>
            <IntoBox>
                <Logo></Logo>
                <RedesSociales/>
            </IntoBox>
        </HeaderBox>
    );
};

export default Header;