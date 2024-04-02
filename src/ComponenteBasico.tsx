import { useState } from "react";
import Anidado1 from "./Anidado1";
import FormComponent from "./Form";

const withData=(WrappedComponent:any)=>{
    return({render,...props}:any)=>{
        return render(props)
    }}
function Envuelto({data}:any){
   return(
    <div>
        <h1>Componente envuelto</h1>
        <p>Data {data}</p>
    </div>
   )
}

const WrappedComponentWithData = withData(Envuelto);


const MiComponente = () => {

    return (
        <div>
            <h1>Mi componente</h1>
            <WrappedComponentWithData data={10} render={(props:any)=> <Envuelto {...props}/>} />
        </div>
    )
}

export default MiComponente;