import { ContainerBolinha } from "../styles"


function BolinhaAleatoria({number}){
    return(
        <>
            <ContainerBolinha>
                <h1 style={{"height": "auto auto"}}>{number}</h1>
            </ContainerBolinha>
        </>
    )

}
export default BolinhaAleatoria