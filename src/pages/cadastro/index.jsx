import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../../service/supabase"

function Cadastro() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [data_nascimento, setData_nascimento] = useState('')
    const [cpf, setCpf] = useState('');
    
    useEffect(() => {
        const checkUser = async () => {
            const { data: { user: currentUser }, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Erro ao verificar o usuário:", error);
            } else if (currentUser) {
                navigate('/dashboard'); 
            }
        };

        checkUser();
    }, [navigate]);

    const handleCadastroSubmit = async (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            if (password === confirmPassword) {
                try {
                    const { data, error } = await supabase.auth.signUp({
                        email: email,
                        password: password
                    })
                   
                    if (error) {
                        alert(error.message)
                    } else {
                        await cadastrarUsuario()
                        alert('Cadastro realizado com sucesso')
                        navigate('/login')
                    }
                } catch (error) {
                    alert(error.message)
                }
            } else {
                alert('As senhas não conferem')
            }
        } else {
            alert('Preencha todos os campos')
        }
        
    }

    async function cadastrarUsuario() {
     
        const { data, error } = await supabase
            .from("users")
            .insert({
                name: name,
                email: email,
                birthdate: data_nascimento,
                isAdmin:false,
                deleted: false,
                cpf: cpf
            });
    
        if (error) {
            console.error("Erro ao cadastrar o usuário:", error);
        } else {
            console.log("Usuário cadastrado com sucesso:", data);
        }
    }
    
    





    return (
        <div className="flex flex-col min-h-screen bg-orange-50">
            <header className="bg-orange-500 p-4">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-white">Aurora PPA</h1>
                </div>
            </header>
            <main className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">Cadastro de Gestores</h2>
                    <form className="space-y-4" onSubmit={handleCadastroSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                            <input id="name" type="text" placeholder="Seu nome" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">Cpf</label>
                            <input id="cpf" type="text" placeholder="Digite seu cpf" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="data-nascimento" className="block text-sm font-medium text-gray-700">Data de nascimento</label>
                            <input id="data-nascimento" type="date" placeholder="Data de nascimento" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={data_nascimento}
                                onChange={(e) => setData_nascimento(e.target.value)}
                            />
                        </div>
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
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
                            <input id="confirm-password" type="password" placeholder="••••••••" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button className="w-full bg-orange-500 text-white hover:bg-orange-600 h-10 py-2 px-4">Cadastrar</button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Já tem uma conta? <Link to="/" className="text-orange-500 hover:underline">Faça login</Link>
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

export default Cadastro