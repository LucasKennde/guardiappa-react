import { useState, FormEvent, ChangeEvent } from 'react'
import { mockComplaints } from '../../service/mockData'
import aurora from '../../assets/aurora.png'
import abraco from '../../assets/abraco.png'
import hand from '../../assets/hand.png'
import profile from '../../assets/profile.jpg'
import protetion from '../../assets/protetion.png'
import background1 from '../../assets/background1.png'
import Header from '../../components/header/header.tsx'
import { Link } from 'react-router-dom'

function Home() {
    const [ajuda, setAjuda] = useState<string>("")
    const [tipoAjuda, setTipoAjuda] = useState<string>("")

    const handlePedirAjuda = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (ajuda.trim() === "" || tipoAjuda.trim() === '') {
            alert("Todos os campos precisam estar preenchidos");
            return;
        }
        try {
            mockComplaints.create({
                text: ajuda,
                tipo_ajuda: tipoAjuda
            });
            alert('Ajuda pedida com sucesso');
            setAjuda("");
            setTipoAjuda("");
        } catch (error) {
            alert('Erro ao pedir ajuda');
        }
    }

    return (
        <>
            <Header />
            <main className="w-full flex items-center flex-col">
                <div
                    className="w-full flex justify-center bg-contain bg-repeat-x bg-bottom"
                    id="home"
                    style={{ backgroundImage: `url(${background1})` }}
                >
                    <div className="flex w-full max-w-screen-2xl h-[calc(100vh-100px)] justify-between items-center max-sm:flex-col max-sm:p-2.5">
                        <div className="w-1/2 h-full flex flex-col justify-center relative max-sm:w-full max-sm:justify-start max-sm:pt-25">
                            <p className="text-orange-600 text-6xl font-bold font-['Fredoka'] max-sm:text-center max-sm:text-3xl">
                                <strong>Sinta-se protegida</strong>
                            </p>
                            <p className="text-orange-600 text-6xl font-bold font-['Fredoka'] max-sm:text-center max-sm:text-3xl">
                                com a Aurora, nossa Guardiã PPA
                            </p>
                            <img src={abraco} alt="Abraço" className="h-3/5 absolute -bottom-1/3 z-10 max-sm:hidden" />
                        </div>
                        <div className="h-full max-sm:relative max-sm:bottom-0 max-sm:right-0 max-sm:z-[-1]">
                            <img src={aurora} alt="aurora" className="h-[95%] max-sm:h-1/2 max-sm:absolute max-sm:z-[-1] max-sm:bottom-0 max-sm:right-0" />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center bg-orange-600 min-h-screen" id="about">
                    <div className="flex w-full max-w-screen-2xl flex-col items-center relative pb-64">
                        <img src={hand} alt="hand" className="absolute h-[30%] bottom-0 right-0 opacity-20" />

                        <h1 className="text-gray-50 text-6xl font-bold font-['Fredoka'] py-28">Sobre</h1>

                        <div className="w-full flex justify-between text-gray-50 max-sm:flex-col max-sm:gap-8 max-sm:pb-8">
                            <div className="w-1/2 text-left px-8 flex flex-col gap-8 max-sm:w-full">
                                <strong className="text-5xl font-['Fredoka'] max-sm:text-3xl">
                                    Tecnologia no combate à violência contra as mulheres
                                </strong>
                                <p className="text-2xl font-medium font-['Poppins']">
                                    Aurora é um personagem que utiliza a tecnologia como aliada no combate à violência, bullying e abusos contra meninas na EEMTI Poeta Patativa do Assaré.
                                </p>
                            </div>
                            <div className="w-1/2 px-8 max-sm:w-full max-sm:pb-4">
                                <p className="text-2xl font-medium font-['Poppins']">
                                    A ideia nasceu em junho de 2024, em Fortaleza, durante a edição do Patativa Científico. Tudo começou com o estudo sobre a equidade de gênero e a proteção às mulheres. Baseado nisso, percebemos que esse problema se alastra principalmente nos corredores da escola.
                                    <br /><br />
                                    Pensando nisso, como forma de proteger, prevenir e combater os diversos tipos de violência na escola, desenvolvemos a Guardiã PPA.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center bg-orange-50 py-20 border-t-4 border-orange-500" id="sexualizacao">
                    <div className="flex w-full max-w-screen-2xl flex-col items-center relative">
                        <h1 className="text-orange-600 text-6xl font-bold text-center font-['Fredoka']">Sexualização Precoce</h1>
                        <div className="w-full flex justify-between gap-8 mt-8 max-sm:flex-col">
                            <div className="w-1/2 bg-orange-50 p-8 rounded-lg shadow-md max-sm:w-full">
                                <strong className="text-2xl text-gray-800 block mb-4 font-['Fredoka']">Entenda os riscos e como se proteger</strong>
                                <p className="mt-4 text-gray-700 leading-relaxed font-['Poppins']">A sexualização precoce é a exposição de crianças e adolescentes a conteúdos, comportamentos ou situações de natureza sexual inadequadas para sua idade. Isso pode acontecer através de mídias sociais, músicas, propagandas, ou até mesmo em ambientes escolares.</p>
                                <p className="mt-6 text-lg font-bold text-orange-600 font-['Poppins']">Sinais de alerta:</p>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2 font-['Poppins']">
                                    <li>Comportamento sexual inapropriado para a idade</li>
                                    <li>Interesse excessivo em conteúdo sexual</li>
                                    <li>Mudanças bruscas de comportamento</li>
                                    <li>Isolamento social</li>
                                </ul>
                            </div>
                            <div className="w-1/2 bg-orange-50 p-8 rounded-lg shadow-md max-sm:w-full">
                                <p className="text-gray-700 leading-relaxed font-['Poppins']">A sexualização precoce pode trazer consequências graves para o desenvolvimento emocional, psicológico e social de meninas e meninos. É fundamental que pais, educadores e a comunidade estejam atentos e criem um ambiente seguro de diálogo.</p>
                                <p className="mt-6 text-lg font-bold text-orange-600 font-['Poppins']">Como a Aurora pode ajudar:</p>
                                <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2 font-['Poppins']">
                                    <li>Canal seguro e anônimo para denúncias</li>
                                    <li>Orientação e acolhimento</li>
                                    <li>Encaminhamento para profissionais especializados</li>
                                    <li>Educação e conscientização</li>
                                </ul>
                                <p className="mt-6 text-gray-600 italic border-l-4 border-orange-500 pl-4 py-2 font-['Poppins']">"Proteger nossas crianças e adolescentes é responsabilidade de todos. Se você perceber algo errado, não hesite em pedir ajuda."</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center min-h-screen max-sm:p-4" id="protetion">
                    <div className="w-full max-w-screen-2xl flex flex-col items-center pb-48">
                        <h1 className="text-orange-600 text-6xl font-bold font-['Fredoka'] py-28 max-sm:text-5xl max-sm:pb-6 max-sm:text-center">
                            A Aurora está te escutando!
                        </h1>

                        <div className="w-full flex justify-between text-orange-600 h-full max-sm:relative max-sm:pb-8">
                            <div className="w-1/2 text-left px-8 flex flex-col gap-8 max-sm:w-full">
                                <p className="text-2xl font-medium font-['Poppins']">Mensagem:</p>
                                <textarea
                                    name="textHelp"
                                    id="textareaHelp"
                                    placeholder="Deixe aqui a sua mensagem"
                                    value={ajuda}
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAjuda(e.target.value)}
                                    className="w-4/5 h-[300px] rounded-lg border-4 border-orange-600 p-4 max-sm:w-full max-sm:bg-white/50"
                                />

                                <label htmlFor="select-tipe" className='flex flex-col w-4/5 max-sm:w-full'>
                                    <select
                                        name="select-tipe"
                                        id="select-tipe"
                                        value={tipoAjuda}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTipoAjuda(e.target.value)}
                                        className="p-3 border-4 border-orange-600 rounded-lg text-xl font-semibold max-sm:outline-none"
                                    >
                                        <option value="">Qual o tipo de ajuda?</option>
                                        <option value="violencia">Violência</option>
                                        <option value="bullying">Bullying</option>
                                        <option value="abuso">Abuso</option>
                                        <option value="outros">outros</option>
                                    </select>
                                </label>

                                <button
                                    className="relative inline-block w-4/5 px-5 py-2.5 bg-orange-600 text-white font-bold text-center no-underline border-none cursor-pointer font-['Fredoka'] text-2xl before:content-[''] before:absolute before:top-2 before:left-2 before:-right-1 before:-bottom-1 before:bg-orange-400 before:z-[-1] max-sm:w-full max-sm:text-base"
                                    onClick={handlePedirAjuda as any}
                                >
                                    Solicitar Proteção
                                </button>
                            </div>

                            <div
                                className="h-full w-1/2 flex items-center bg-no-repeat bg-center bg-contain max-sm:w-full max-sm:absolute max-sm:z-[-1] max-sm:opacity-40"
                                style={{ backgroundImage: `url(${protetion})` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center py-20 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400">
                    <div className="w-full max-w-screen-xl px-4">
                        {/* <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4 font-['Fredoka']">O que dizem sobre nós</h2>
                            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
                        </div> */}

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                <div className="flex flex-col h-full">
                                    <div className="text-yellow-300 text-2xl mb-4">★★★★★</div>
                                    <p className="text-white text-base mb-6 flex-grow font-['Poppins'] leading-relaxed">
                                        "A Aurora me ajudou a ter coragem de falar sobre o que estava acontecendo. Saber que existe um canal seguro fez toda a diferença."
                                    </p>
                                    {/* <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                                        <div className="rounded-full h-12 w-12 bg-orange-300 flex items-center justify-center text-orange-600 font-bold text-xl">M</div>
                                        <div className="text-left">
                                            <p className="text-white font-bold font-['Poppins']">Anônimo</p>
                                            <p className="text-white/80 text-sm font-['Poppins']">Estudante</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                <div className="flex flex-col h-full">
                                    <div className="text-yellow-300 text-2xl mb-4">★★★★★</div>
                                    <p className="text-white text-base mb-6 flex-grow font-['Poppins'] leading-relaxed">
                                        "Eu nunca soube onde buscar ajuda até encontrar este site. As informações e recursos fornecidos aqui foram essenciais para minha recuperação."
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                                        <img src={profile} alt="Ana Cristina" className="rounded-full h-12 w-12 object-cover" />
                                        <div className="text-left">
                                            <p className="text-white font-bold font-['Poppins']">Ana Cristina</p>
                                            <p className="text-white/80 text-sm font-['Poppins']">Professora, EEMTI Poeta Patativa do Assaré</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                <div className="flex flex-col h-full">
                                    <div className="text-yellow-300 text-2xl mb-4">★★★★★</div>
                                    <p className="text-white text-base mb-6 flex-grow font-['Poppins'] leading-relaxed">
                                        "Como gestora, vejo o impacto positivo que a Guardiã PPA tem na nossa escola. É uma ferramenta essencial para proteger nossas alunas."
                                    </p>
                                    {/* <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                                        <div className="rounded-full h-12 w-12 bg-orange-300 flex items-center justify-center text-orange-600 font-bold text-xl">J</div>
                                        <div className="text-left">
                                            <p className="text-white font-bold font-['Poppins']">Anônimo</p>
                                            <p className="text-white/80 text-sm font-['Poppins']">Gestora Escolar</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="w-full flex flex-col items-center justify-center">
                <div className="flex justify-evenly w-full max-w-screen-2xl pb-10 max-sm:flex-col" id="contato">
                    <div className="w-2/5 h-1/2 flex flex-col p-4 font-['Poppins'] max-sm:w-full">
                        <h1 className="text-orange-600 text-3xl py-4">Curtiu nosso proposito?</h1>
                        <h2 className="font-normal">Vem conversar com a gente.</h2>
                        <p className="text-2xl text-orange-400">guardiappa@gmail.com</p>
                    </div>
                    <div className="w-2/5 h-1/2 flex flex-col p-4 font-['Poppins'] max-sm:w-full">
                        <h1 className="text-orange-600 text-3xl py-4">Saiba onde nos encontrar</h1>
                        <p className="text-2xl text-orange-400">EEMTI Poeta Patativa do Assaré.</p>
                        <h2 className="font-normal">R. Descartes Braga, 4269 - Granja Lisboa, Fortaleza - CE</h2>
                    </div>
                </div>
                <div className='flex flex-col w-full text-center items-center'>
                    <p>© 2024 Aurora Guardiã PPA. Todos os direitos reservados.</p>
                    <Link to="/login" className="text-orange-600 hover:text-orange-700">
                        Acessar portal
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default Home;
