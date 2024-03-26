import { createContext, useState } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
const [spinner, setSpinner] = useState(false);
const [dataEnviada, setDataEnviada] = useState(false)
return (
<ButtonContext.Provider value={{ spinner, setSpinner, dataEnviada, setDataEnviada }}>{children}</ButtonContext.Provider>
);
};