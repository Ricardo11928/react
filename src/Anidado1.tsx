

function Anidado1({count,onCountChange}:any) {
    const handleCountChange = () => {
        onCountChange(count + 1);

    }

    return(
        <div>
            
            <button onClick={handleCountChange}>Incrementar</button>
            <p>Contador del hijo{count}</p>
        </div>
    )
}
 const funcionExterna=()=>{
    console.log('Funcion externa')
}
 const variableExterna= "Variable externa";

 const AnidadoApi={
    funcionExterna,
    variableExterna
 }


export {AnidadoApi}
export default Anidado1;