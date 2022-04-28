import styled from 'styled-components'

export const ContainerHeader = styled.div`
   background: #ff912a; 
`;

export const ContainerMain = styled.div`
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding: 6rem 0;
    background: rgb(218, 218, 218);
    margin-bottom: 4rem; 
    width:100vw;
`;

export const ContainerBolinha = styled.div`
    width: 75px;
    height: 75px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    text-align: center;
    background: white;
    border-radius:50%;
`;


export const Wave =  styled.svg`
    background: #ff912a;
`;


export const Logo  = styled.img`
    width: 15%;
    position: absolute;
    top: 1rem;
    left:1rem;
`;