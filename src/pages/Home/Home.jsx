import './HomeStyle.css';
import './InputHeader.css';
import './BannerStyle.css';
import { BrowserRouter as Router, Link } from "react-router-dom";



// IMAGENS
import logo from "../../assets/svg/logo-coffe.svg";
import banner from "../../assets/svg/banner-coffe.svg";
import { RiSearchLine } from 'react-icons/ri';
import { LiaShoppingCartSolid } from "react-icons/lia";

// IMPORTE DE COMPONENTS
import Button from '../../components/Button/Button';
import FavComponent from '../../components/FavoriteComponent/FavComponent';


// IMPORTE DAS FOTOS DOS COMPONENTS FAVORITOS
import foto1 from '../../assets/imgs/foto1.svg';




const Home = () => {
  return (
    <>

    <Router>
        <div className="container-cabecalho">
            <nav className="cabecalho-nav-bar">

                <div className='nav-bar-content'>
                    <img src={logo} alt="" />
                    <ul className='content-list'>
                        <Link className='gp-list-nav-bar' to={'#'}><span className='content-sobre'>Sobre Nós</span></Link>
                        <Link className='gp-list-nav-bar' to={'#'}>Nossos Produtos</Link>
                        <Link className='gp-list-nav-bar' to={'#'}>Delivery</Link>
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


        </nav>  {/* FIM DO CABEÇALHO DE NAVEGAÇÃO  */}


        {/* ------ BANNERS PRINCIPAIS ------ */}

                        <div className='container-banners'>
                            <div className='banners-titles'>

                                <div className='title-principal'>
                                    <h2>Recarregue suas <b>energias</b> com café, porque os bugs não vão consertar a si mesmos!</h2>

                                    <p>Aumente sua produtividade e melhore seu humor com um copo de café pela manhã porque até o código precisa de uma dose de cafeína para funcionar direito!</p>
                                </div>

                                    <div className='btn-container-div'>
                                        <Button title='Peça agora' link="#" />
                                    </div>
                            </div>

                                <div className='banners-photos'>
                                    <img className='img-banner-principal' src={banner} alt="" />
                                </div>

                        </div> {/* FIM DA DIV DOS BANNERS */}

                                        {/* DIV DE COMPONENTS PARA DESTACAR OS FAVORITOS */}

                                            <div className='container-favorites'>
                                                    <div className='layout-container-favorites'>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'JSpresso Capuccino'} preco={'R$ 7,49'} foto={foto1} />
                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'JSpresso Capuccino'} preco={'R$ 7,49'} foto={foto1} />
                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'JSpresso Capuccino'} preco={'R$ 7,49'} foto={foto1} />
                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'JSpresso Capuccino'} preco={'R$ 7,49'} foto={foto1} />
                                                       </div>


                                                       <div className='favorites-bg'></div>
                                                </div>

                                            </div> {/* FIM DA DIV FAVORITES*/}

        </div> {/* FIM DA DIV GERAL */}
    </Router>

    </>
  )
}

export default Home;
