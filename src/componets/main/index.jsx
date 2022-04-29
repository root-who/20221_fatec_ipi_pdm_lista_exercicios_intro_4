import { ButtonRoda, ContainerMain, Down, Up } from "../styles";
import LoteriaHeader from "../header"
import BolinhaAleatoria from "../randonBalls";
import { useState } from "react";


function Loteria() {

    const [bolinhas, setBolinhas] = useState([13, 43, 56, 54, 45, 23])
    const [animation, setAnimation] = useState({})
    const [buttom, setButtom] = useState(false)

    function click(event) {
        setButtom(true)
        setAnimation({ up: Up, action: "2.5s infinite" })
        let newNumbers = [];
        setTimeout(() => {

            setButtom(false)
            
            for(let i = 0; i < bolinhas.length; i++) {
                let exist = true;
                if (i === 0){
                    newNumbers.push(Math.floor(Math.random() * (60 - 1) + 1))
                }else{
                    while(exist){
                        const random = Math.floor(Math.random() * (60 - 1) + 1)
                        const found = newNumbers.find(element => element === random)
                        if(found === undefined){
                            newNumbers.push(random)
                            exist = false;
                        }else{
                            console.log(found)
                        }
                    }
                }
                console.log(i)
            }
            
            setAnimation({ up: Down, action: "3s 1" });
            setBolinhas(newNumbers)
        }, 6000)
        setTimeout(() => {

        }, 5000)
    }

    return (
        <>
            <LoteriaHeader></LoteriaHeader>
            <ContainerMain padding={"padding: 6rem 0;"}>
                {
                    bolinhas.map((num, index) => {
                        return (
                            <BolinhaAleatoria key={index} number={num} animation={animation}>
                            </BolinhaAleatoria>
                        )
                    })
                }
            </ContainerMain>
            <ContainerMain padding={"padding: 0 0;"}>
                <ButtonRoda disabled={buttom} onClick={click}>Aperte-me</ButtonRoda>
            </ContainerMain>

        </>
    )
}

export default Loteria;