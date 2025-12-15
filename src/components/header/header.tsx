import { useEffect, useRef } from "react";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

function Header() {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                headerRef.current?.classList.add('bg-gray-50');
            } else {
                headerRef.current?.classList.remove('bg-gray-50');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className="w-full flex justify-center sticky top-0 z-[9] transition-all duration-1000"
                ref={headerRef}
                id='header'
            >
                <div className="flex w-full max-w-screen-2xl justify-between items-center h-[100px] max-sm:p-2.5">
                    <img src={logo} alt="logo" className="h-[55px] max-sm:w-[35%] max-sm:h-auto" />
                    <ul className="flex list-none gap-11 items-center font-['Fredoka']">
                        <li className="text-2xl font-black text-orange-600 max-sm:hidden">
                            <a href="#home" className="no-underline text-orange-600">Ínicio</a>
                        </li>
                        <li className="text-2xl font-black text-orange-600 max-sm:hidden">
                            <a href="#about" className="no-underline text-orange-600">Sobre</a>
                        </li>
                        <li className="text-2xl font-black text-orange-600 max-sm:hidden">
                            <a href="#contato" className="no-underline text-orange-600">Contato</a>
                        </li>
                        <li>
                            <strong className="relative inline-block px-5 py-2.5 bg-orange-600 text-white font-bold text-center no-underline border-none cursor-pointer font-['Fredoka'] before:content-[''] before:absolute before:top-2 before:left-2 before:-right-1 before:-bottom-1 before:bg-orange-400 before:z-[-1] max-sm:text-base max-sm:px-5 max-sm:py-2.5">
                                <a href="#protetion" className="text-white no-underline">Solicitar proteção</a>
                            </strong>
                        </li>
                        <li>
                            <strong className="relative inline-block px-5 py-2.5 bg-[#FBC344] text-white font-bold text-center no-underline border-none cursor-pointer font-['Fredoka'] before:content-[''] before:absolute before:top-2 before:left-2 before:-right-1 before:-bottom-1 before:bg-orange-400 before:z-[-1] max-sm:text-base max-sm:px-5 max-sm:py-2.5">
                                <Link to="/viver-importa" className="text-white no-underline">Viver Importa</Link>
                            </strong>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
