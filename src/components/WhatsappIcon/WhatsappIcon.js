import React from 'react'
import styled from 'styled-components'
import whatsapp from '../../logos/WhatsApp.svg'

export const WsapComponent = () => {
   
    const PHONE_NUMBER = '+5491122334455';
    return (
        <ContainerIMGWhsap href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=Hola Aja!%20quería%20contactarme%20via%20web%20..`}>
            <img src={whatsapp} alt='whatsapp'/>
        </ContainerIMGWhsap>
    )
}


const ContainerIMGWhsap = styled.a`
    width: 70px;
    height: 70px;

    position: fixed;
    right: 30px;
    bottom: 5%;
    img{
        width: 100%;
        height: 100%;
    }

`;