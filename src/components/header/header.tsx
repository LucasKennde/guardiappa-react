import { useEffect, useRef } from "react";
import logo from '../../assets/logo.png'
function Header(){

    const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add('scrollHeader');
      } else {
        headerRef.current.classList.remove('scrollHeader');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpar o evento de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
return(
    <>
       <header className="w-full flex justify-center" ref={headerRef} id='header'>
            <div className=" flex w-full max-w-screen-2xl justify-between content-header">
                <img src={logo} alt="logo" />
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><strong className="button"><a href="#protetion">Solicitar
                                proteção</a></strong></li>
                </ul>
            </div>
        </header>
    </>
)
}

export default Header;