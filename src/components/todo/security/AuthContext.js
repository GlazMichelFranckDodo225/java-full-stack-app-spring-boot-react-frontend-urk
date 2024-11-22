import { createContext, useState } from "react";

// Create a Context
export const AuthContext = createContext();

// Share the Created Context with Other Components
export default function AuthProvider({children}) {
    // Put some States in the Context
    const [number, setNumber] = useState(10);

    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )
}