import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home  from "./pages/home"
import Login from "./pages/login"
import Cadastro from "./pages/cadastro"
import Dashboard from "./pages/dashboard/dashboard"


function App() {
 return(
 
  <BrowserRouter>
  <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    
  </Routes>
  </BrowserRouter>
  
 )
}

export default App
