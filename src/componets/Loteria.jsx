import { ContainerMain} from "./styles";
import LoteriaHeader from "../componets/header/LoteriaHeader"
import BolinhaAleatoria from "./randonBalls/BolinhaAleatoria";
import { useState } from "react";


function Loteria() {
    
    const [bolinhas, setBolinhas] = useState([13,43,56,54,45,23])
    
    function click(event){
        let newNumbers = []
        bolinhas.forEach((v)=>{
            newNumbers.push(Math.floor(Math.random() * (60 - 1) + 1))
        })
        setBolinhas(newNumbers)
    }

    return (
        <> 
        <LoteriaHeader></LoteriaHeader>
        <ContainerMain>
        {
            bolinhas.map((num, index)=>{
                return (
                    <BolinhaAleatoria key={index} number={num}>
                    </BolinhaAleatoria>
                )
            })
        }
        </ContainerMain>
        <button onClick={click}>Aperte-me</button>
        </>
    )
}

export default Loteria;