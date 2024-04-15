import './NaveBar.css';


import { Link } from 'react-router-dom';
import logo from "../../assets/svg/logo-coffe.svg";
import { RiSearchLine } from 'react-icons/ri';
import { LiaShoppingCartSolid } from "react-icons/lia";


const NavegacaoBar = () => {
  return (
    <nav className="cabecalho-nav-bar">

                <div className='nav-bar-content'>
                    <img src={logo} alt="" />
                        <ul className='content-list'>
                            <Link className='gp-list-nav-bar' to={'/sobre'}><span className='content-sobre'>Sobre Nós</span></Link>
                            <Link className='gp-list-nav-bar' to={'/'}>Nossos Produtos</Link>
                            <Link className='gp-list-nav-bar' to={'/'}>Delivery</Link>
                        </ul>
                </div>

            {/* CÓDIGO DO INPUT DE BUSCA */}

                            <div className='content-search'>
                                <div className="search-input">
                                    <RiSearchLine className="search-icon" />
                                        <input type="text" placeholder="Capuccino" />
                                </div>
                                <div>
                                    <LiaShoppingCartSolid size={'32px'}  />
                                </div>
                            </div>
        </nav>
  )
}

export default NavegacaoBar
