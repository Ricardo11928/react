function ToggleState({on}:any){
    return <div> El interruptor esta {on? 'encendido':'apagadado'}</div>
}

function ToggleButton({on, toggle}:any){
    return <button onClick={toggle}>{on? 'Apagar':'Encender'}</button>
}

export default {ToggleButton, ToggleState}