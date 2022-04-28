import styled , { keyframes }from 'styled-components'

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
    
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
`;





const Up = keyframes`  
  0% { 
    transform: translateY(20px);
    opacity:1;
   }

  100% { 
    transform: translateY(-180%);
    z-index:-40;
  }
`;

export const Number = styled.h1`
    animation: ${Up} 1s ;
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