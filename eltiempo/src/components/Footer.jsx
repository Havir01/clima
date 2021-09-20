import React from 'react';
import styled from 'styled-components';
const FooterrBox = styled.footer`
    width: 100vw;
    background-color:#2A3744;
    display: flex;
    flex-direction:column;
    align-items: center;
    
`;
const IntoBox = styled.div`
    display: flex;
    flex-direction:column;
    width: 80vw;
    //border:1px solid #fff;
    align-items: center;
    color: white;

`;
const Footer = () => {
    return (
        <FooterrBox>
            <IntoBox>
                <h1>Prueva</h1>
                <h2>Rolando Osorio</h2>
            </IntoBox>
        </FooterrBox>
    );
};

export default Footer;