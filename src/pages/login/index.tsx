import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import { useAuth } from "../../service/auth";
import { useEffect, useState, FormEvent } from "react";
import { mockAuth } from "../../service/mockData";

function Login() {
    const navigate = useNavigate()

    const { user, setUser } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    console.log(user);

    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data, error } = mockAuth.signIn(email, password);
            if (error) throw error;
            if (data && 'user' in data) {
                setUser(data.user);
            }
            navigate("/dashboard");

        }
        catch (error) {
            console.log(error);
            alert("Email ou senha incorretos")
        }
    }

    useEffect(() => {
        const checkUser = () => {
            const { data, error } = mockAuth.getUser();
            if (error) {
                console.error("Erro ao verificar o usuário:", error);
            } else if (data && 'user' in data && data.user) {
                navigate('/dashboard');
            }
        };

        checkUser();
    }, [navigate]);

    return (
        <div className="flex flex-col min-h-screen bg-orange-50">
            <header className="bg-orange-500 p-4">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-white">Aurora PPA</h1>
                </div>
            </header>
            <main className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">Login de Gestores</h2>
                    <form className="space-y-4" onSubmit={handleLoginSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" type="email" placeholder="seu@email.com" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                            <input id="password" type="password" placeholder="••••••••" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="w-full bg-orange-500 text-white hover:bg-orange-600 h-10 py-2 px-4">Entrar</button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Não tem uma conta? <Link to="/cadastro" className="text-orange-500 hover:underline">Cadastre-se</Link>
                    </p>
                </div>
            </main>
            <footer className="bg-orange-500 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>© 2023 Aurora Guardiã PPA. Todos os direitos reservados.</p>
                    <Link to="/">Voltar para Home</Link>
                </div>
            </footer>
        </div>
    )
}

export default Login;
