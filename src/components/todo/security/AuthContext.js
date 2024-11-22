import { createContext } from "react";

// Create a Context
const AuthContext = createContext();

// Put some States in the Context

// Share the Created Context with Other Components

export default function AuthProvider({children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

