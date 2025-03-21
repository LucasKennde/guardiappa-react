import React, { useEffect, useState } from 'react'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { BarChart, Users, AlertTriangle } from "lucide-react"
import { useAuth } from '../../service/auth'
import { supabase } from '../../service/supabase'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState("");
  const firstName = fullName.split(" ")
  const navigate = useNavigate()
  const [denuncias, setDenuncias] = useState([])
  const [gestores, setGestores] = useState([])



  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
      console.log("Usuário desconectado com sucesso");
    } catch (error) {
      console.error("Erro ao desconectar o usuário:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const {data:userProfile} = await supabase.from('users').select('*').eq('email', user.email).single()
          setFullName(userProfile.name);
          if (!userProfile.isAdmin) {
            alert("Você não é um usuário verificado. Por favor, entre em contato com o suporte.");
            handleLogout();
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
          handleLogout();
        }
      }
    };
    getGestores()
    if (user !== undefined) {
      fetchData();
    }
  }, [user, navigate]);


  const getDenuncias = async () => {
    const { data, error } = await supabase
      .from('complaints')
      .select('*')
    if (error) {
      console.error("Erro ao buscar denúncias:", error);
    } else {
      setDenuncias(data);
    }

  }

  const getGestores = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('isAdmin', true)
      console.log(data);
      
    if (error) {
      console.error("Erro ao buscar gestores:", error);
    } else {
      setGestores(data);
    }
  }

  const toggleVerifiedStatus = async (gestorId, currentStatus) => {
    const { error } = await supabase
      .from('usuariosCadastrados')
      .update({ is_verified: !currentStatus })
      .eq('user_id', gestorId);

    if (error) {
      console.error('Erro ao atualizar o status:', error);
    } else {
      getGestores();
    }
  };

  const calcularMargem = (denunciasAtual, denunciasAnterior) => {
    if (denunciasAnterior === 0) return 0;
    const diferenca = denunciasAtual - denunciasAnterior;
    const margem = (diferenca / denunciasAnterior) * 100;
    return margem.toFixed(2);
  };




  return (
    <div className="flex flex-col min-h-screen  bg-orange-50">
      <header className="bg-orange-500 p-4 ">
        <div className="mx-auto w-full flex justify-between items-center">
          <h2 className='text-2xl font-bold text-white'>Olá, {firstName[0]}</h2>
          <h1 className="text-2xl font-bold text-white">Aurora PPA - Dashboard</h1>
          <Button variant="outline" className="text-white border-white hover:bg-orange-600" onClick={handleLogout}>Sair</Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Denúncias</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{denuncias.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Denúncias Recentes</CardTitle>
              <BarChart className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+22%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gestores Ativos</CardTitle>
              <Users className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{gestores.length}</div>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="denuncias" className="space-y-4">
          <TabsList className="bg-orange-100">
            <TabsTrigger value="denuncias" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Denúncias</TabsTrigger>
            <TabsTrigger value="gestores" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Gestores</TabsTrigger>
          </TabsList>
          <TabsContent value="denuncias" className="space-y-4">
            <div className="flex justify-between">
              <Input className="max-w-sm" placeholder="Buscar denúncias..." />
              <Button className="bg-orange-500 text-white hover:bg-orange-600">Exportar Relatório</Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Lista de Denúncias</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Denuncia</TableHead>
                      <TableHead>Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {denuncias.map((denuncia) => {
                      const data = denuncia.created_at.split("T")
                      if (denuncia.text.trim() !== "") {
                        return (

                          <TableRow key={denuncia.id}>
                            <TableCell>{denuncia.id}</TableCell>
                            <TableCell>{denuncia.tipo_ajuda}</TableCell>
                            <TableCell>{denuncia.text}</TableCell>
                            <TableCell>{data[0]}</TableCell>
                          </TableRow>
                        )
                      }

                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gestores" className="space-y-4">
            <div className="flex justify-between">
              <Input className="max-w-sm" placeholder="Buscar gestores..." />
              <Button className="bg-orange-500 text-white hover:bg-orange-600">Adicionar Gestor</Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Lista de Gestores</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Cpf</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gestores.map((gestor) => (
                      <TableRow key={gestor.user_id}>
                        <TableCell>{gestor.name}</TableCell>
                        <TableCell>{gestor.email}</TableCell>
                        <TableCell>{gestor.cpf}</TableCell>
                        <TableCell>{gestor.is_verified ? "Ativo" : "Não Verificado"}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => toggleVerifiedStatus(gestor.user_id, gestor.is_verified)}
                            className={gestor.is_verified ? "bg-red-500 text-white" : "bg-green-500 text-white"}
                          >
                            {gestor.is_verified ? "Desativar" : "Ativar"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-orange-500 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2023 Aurora Guardiã PPA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}