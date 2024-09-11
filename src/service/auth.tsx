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

        // Adiciona um listener para monitorar mudanças no estado de autenticação
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                setUser(session.user); // Atualiza o usuário com a sessão ativa
            } else {
                setUser(null); // Limpa o usuário caso a sessão seja encerrada
            }
        });

        // Limpeza do listener ao desmontar o componente
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
