import { useEffect, useState } from 'react'
import { supabase } from '../../service/supabase'
import './src/css/style.css'
// import './src/js/script.js'
import aurora from '../../assets/aurora.png'
import abraco from '../../assets/abraco.png'
import hand from '../../assets/hand.png'
import profile from '../../assets/profile.jpg'
import Header from '../../components/header/header.tsx'
import { Link } from 'react-router-dom'

 function Home(){
    const [ajuda , setAjuda] = useState("")
    
    const [tipoAjuda, setTipoAjuda] = useState("")
    const handlePedirAjuda = async (e) => {
      e.preventDefault()
      if (ajuda.trim() === "" || tipoAjuda.trim() ==='') {
        alert("Todos os campos precisam estar preenchidos");
        return;
      }
      const { data, error } = await supabase.from('complaints').insert({
         text: ajuda,
         tipo_ajuda:tipoAjuda
         });
      if (error) {
        alert('Erro ao pedir ajuda');
      } else {
        alert('Ajuda pedida com sucesso');
        setAjuda(""); 
        
      }
    }
    
   
  
    

   
  
    return (
      <>
        <Header/>
        <main className="w-full flex items-center flex-col">
            <div className="container-full init w-full " id="home">
                <div className="flex content-main max-w-screen-2xl">
                    <div className="content-left">
                        <p><strong>Sinta-se
                                protegida</strong></p>
                        <p>com a Aurora,
                            nossa Guardiã PPA</p>
                        <img src={abraco} alt="Abraço" />
                    </div>
                    <div className="content-right">
                        <img src={aurora} alt="aurora" />
                    </div>

                </div>
            </div>
            <div className="container-full about" id="about">
                <div className="container content-about pb-64">

                    <h1>Sobre</h1>
                    <div className="container-full text-about">
                        <div className="content-left">
                            <strong>Tecnologia no combate à violência contra as
                                mulheres</strong>
                            <p> Aurora é um personagem que utiliza a tecnologia como aliada no combate à violência, bullying e abusos contra meninas na EEMTI Poeta Patativa do Assaré.</p>
                        </div>
                        <div className="content-right">
                            <p>A ideia nasceu em junho de 2024, em Fortaleza, durante a edição do Patativa Científico. Tudo começou com o estudo sobre a equidade de gênero e a proteção às mulheres. Baseado nisso, percebemos que esse problema se alastra principalmente nos corredores da escola.

                                Pensando nisso, como forma de proteger, prevenir e combater os diversos tipos de violência na escola, desenvolvemos a Guardiã PPA.</p>
                        </div>
                    </div>
                    <img src={hand} alt="hand" />
                </div>

            </div>
            
            <div className="container-full help" id="protetion">

                <div className="w-full  max-w-screen-2xl content-help pb-48">

                    <h1>A Aurora está te escutando!</h1>
                    <div className="container-full text-help">
                        <div className="content-left">
                            <p> Mensagem:</p>
                            <textarea type="text" name="textHelp"
                                id="textareaHelp"
                                placeholder="Deixe aqui a sua mensagem"
                                value={ajuda}
                                onChange={(e) => setAjuda(e.target.value)}
                                >

                                </textarea>

                            <label htmlFor="select-tipe" className='select-tipe'>
                                
                                <select name="select-tipe" id="select-tipe"
                                value={tipoAjuda}
                                onChange={(e)=>{
                                    setTipoAjuda(e.target.value)
                                }}
                                >   
                                    <option value="">Qual o tipo de ajuda?</option>
                                    <option value="violencia">Violência</option>
                                    <option value="bullying">Bullying</option>
                                    <option value="abuso">Abuso</option>
                                    <option value="outros">outros</option>

                                </select>
                            </label>
                            <button className="button" onClick={handlePedirAjuda}>Solicitar
                                Proteção
                            </button>
                        </div>
                        <div className="content-right">
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-full p-10 feedback">

                <div className="container content-feedback">

                    <div className="container-full max-w-md text-feedback">
                        <h1>★★★★★</h1>
                        <p className='p-5'>"Eu nunca soube onde buscar ajuda até encontrar este site. As informações e recursos fornecidos aqui foram essenciais para minha recuperação."</p>
                        <span>
                            <img src={profile} />
                            <p><strong>Ana Cristina</strong>Professora, EEMTI
                                Poeta Patativa do Assaré.</p>
                        </span>
                    </div>
                </div>

            </div>
        </main>
        <footer className="w-full flex-col justify-center">
            <div className="flex justify-evenly footer w-full max-w-screen-2xl pb-10" id="contato">
                <div className="w-full content-left ">
                    <h1>Curtiu nosso proposito?</h1>
                    <h2> Vem conversar com a gente.</h2>
                    <p>guardiappa@gmail.com</p>
                </div>
                <div className="w-full content-right">
                    <h1>Saiba onde nos encontrar</h1>
                    <p> EEMTI
                        Poeta Patativa do Assaré.</p>
                    <h2>R. Descartes Braga, 4269 - Granja Lisboa, Fortaleza -
                        CE</h2>
                </div>
            </div>
            <div className='flex-col w-full text-center items-center'>
                
                <p>
                © 2024 Aurora Guardiã PPA. Todos os direitos reservados.
                </p>
                <Link to="/login">
                Acessar portal
                </Link>
            </div>
        </footer>
      </>
      
    );
}

export default Home;