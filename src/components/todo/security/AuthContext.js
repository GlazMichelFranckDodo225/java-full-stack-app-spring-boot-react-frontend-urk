import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Share the Created Context with Other Components
export default function AuthProvider({children}) {
    // Put some States in the Context
    const [number, setNumber] = useState(10);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // setInterval(() => setNumber(number + 1), 10000);

    // const valueToBeShared = {number, isAuthenticated, setIsAuthenticated};

    return (
        <AuthContext.Provider value={{number, isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}