import { useState, createContext, useEffect, useContext, ReactNode } from "react";
import { mockAuth } from "./mockData";

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUserSession = () => {
            const { data, error } = mockAuth.getSession();

            if (error) {
                console.error("Erro ao recuperar sessão:", error);
            } else if (data && 'session' in data && data.session) {
                setUser(data.session.user);
            }
        };

        getUserSession();

        const { data: authListener } = mockAuth.onAuthStateChange((session) => {
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

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
}
