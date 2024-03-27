import { createContext, useState } from 'react';

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState(null);
const [userLoggedIn, setUserLoggedIn] = useState(false)
const [loading, setLoading] = useState(true)
return (
<AuthContext.Provider value={{ currentUser, setCurrentUser, userLoggedIn, setUserLoggedIn, loading, setLoading}}>{children}</AuthContext.Provider>
);
};