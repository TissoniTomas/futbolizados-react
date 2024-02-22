import { useState, createContext } from "react";

export const InputContext = createContext()

export const InputProvider = ({children})=>{
    const [input, setInput] = useState("");
    const [dataFiltrada, setDataFiltrada] = useState([]);

    
    return(
        <InputContext.Provider value ={{input,dataFiltrada,setDataFiltrada, setInput}}>
            {children}
        </InputContext.Provider>
    )
}