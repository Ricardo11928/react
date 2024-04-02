import { RefObject, useRef } from "react";


interface UseInputRef{
    inputRef:RefObject<HTMLInputElement>;
    focusInput:()=>void;
    clearInput:()=>void;

}

const UseInputRef=():UseInputRef=>{
    const inputRef=useRef<HTMLInputElement>(null);

    const focusInput=()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    }
    const clearInput=()=>{
        if(inputRef.current){
            inputRef.current.value='Apellido';
        }
    }
    return {inputRef,focusInput,clearInput};
}

export default UseInputRef;