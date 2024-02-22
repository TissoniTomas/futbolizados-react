import { useState, createContext } from "react";

export const ModeContext = createContext()

export const ModeProvider = ({children})=>{
    const [mode, setMode] = useState("");
    return(
        <ModeContext.Provider value ={{mode, setMode}}>
            {children}
        </ModeContext.Provider>
    )
}