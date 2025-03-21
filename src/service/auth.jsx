import { useState, createContext, useEffect, useContext } from "react";
import { supabase } from "./supabase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error) {
                console.error("Erro ao recuperar sessão:", error);
            } else if (session) {
                setUser(session.user); // Definir usuário se a sessão existir
            }
        };

        getUserSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((session) => {
            if (session) {
                setUser(session.user); 
            } else {
                setUser(null); 
            }
        });

        return () => {
            authListener.subscription?.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
