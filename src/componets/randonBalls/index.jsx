import { useEffect } from "react"
import { ContainerBolinha, Number } from "../styles"


function BolinhaAleatoria({number,animation}){

    // useEffect(()=>{
    //     console.log(number)
    // }, [number])
    return(
        <>
            <ContainerBolinha>
                <Number animation={animation}>{number}</Number>
            </ContainerBolinha>
        </>
    )

}
export default BolinhaAleatoria