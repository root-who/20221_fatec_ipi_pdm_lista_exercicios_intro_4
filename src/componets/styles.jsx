import styled , { keyframes }from 'styled-components'

export const ContainerHeader = styled.div`
   background: #ff912a;
`;

export const ContainerMain = styled.div`
    display:flex;
    justify-content: space-around;
    align-items:center;
    ${props => props.padding}
    background: rgb(206, 206, 206); 
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
    box-shadow: 2px 15px 5px -1px rgb(0 0 0 / 20%);
    // box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
`;

export const Wave =  styled.svg`
    background: #ff912a;
`;

export const ButtonRoda = styled.button`
    align-self:center;
    width: 150px;
    height:50px;
    border: none;
    background: #ffa857;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 2px 10px 5px -1px rgb(0 0 0 / 20%);
    border-radius: 10px;
`;

export const Logo  = styled.img`
    width: 15%;
    position: absolute;
    top: 1rem;
    left:1rem;
`;



export const Up = keyframes`  
  0% { 
    transform: translateY(20px);
   }
  5%{
    transform: rotate();
  }
  100% { 
    transform: translateY(-180%);
    z-index:-40;
    
    
  }
`;

export const Down = keyframes`  
  0% { 
    transform: translateY(22px);
   }
  5%{
    transform: rotate();
  }
  100% { 
    transform: translateY(0);   
  }
`;

export const Number = styled.h1`
    transition: ease-in-out;
    animation: ${props => props.animation.up} ${props => props.animation.action};
    
`;


