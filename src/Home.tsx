import React, { useEffect, useState } from "react";
import Anidado1, {AnidadoApi} from "./Anidado1";
import FormComponent from "./Form";
AnidadoApi.funcionExterna();
 console.log('Variable externa:',AnidadoApi.variableExterna)
const Home =()=>{
    const handleClick=(arg1:any,arg2:any)=>{
        console.log('Argumento 1:',arg1)
        console.log('Argumento 2:',arg2)

        console.log(arg1+arg2)
    }
  

    return(
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <FormComponent/>
        </div>

    )
}

export default Home;