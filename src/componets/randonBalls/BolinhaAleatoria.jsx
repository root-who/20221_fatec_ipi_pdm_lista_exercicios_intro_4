import { ContainerBolinha, Number } from "../styles"


function BolinhaAleatoria({number}){
    return(
        <>
            <ContainerBolinha>
                <Number >{number}</Number>
            </ContainerBolinha>
        </>
    )

}
export default BolinhaAleatoria