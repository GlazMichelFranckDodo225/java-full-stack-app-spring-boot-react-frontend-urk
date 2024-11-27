import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Share the Created Context with Other Components
export default function AuthProvider({children}) {
    // Put some States in the Context
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username, password) {
        if (username === 'johndoe' && password === 'dummy') {
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}