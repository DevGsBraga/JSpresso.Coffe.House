import './HomeStyle.css';    // CSS GERAL



// LINKS
import { Link } from 'react-router-dom';

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
import foto2 from '../../assets/imgs/foto2.svg';
import foto3 from '../../assets/imgs/foto3.svg';
import foto4 from '../../assets/imgs/foto4.svg';

// IMPORTE DAS IMAGENS DELIVERY
import coffe from '../../assets/imgs/Delivery/coffe-icon.svg';
import car from '../../assets/imgs/Delivery/car-icon.svg';
import coffeEnd from '../../assets/imgs/Delivery/coffeEnd.svg';


const Home = () => {
  return (
    <>
        <div className="container-cabecalho">
            <nav className="cabecalho-nav-bar">

                <div className='nav-bar-content'>
                    <img src={logo} alt="" />
                        <ul className='content-list'>
                            <Link className='gp-list-nav-bar' to={'/'}><span className='content-sobre'>Sobre Nós</span></Link>
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

            {/* FIM DO CABEÇALHO DE NAVEGAÇÃO  */}


            {/* ------ BANNERS PRINCIPAIS ------ */}

                        <div className='container-banners'>
                            <div className='banners-titles'>

                                <div className='title-principal'>
                                    <h2>Recarregue suas <b>energias</b> com café, porque os bugs não vão consertar a si mesmos!</h2>

                                    <p>
                                        Aumente sua produtividade e melhore seu humor com um copo de café pela manhã porque até o código precisa de uma dose de cafeína para funcionar direito!

                                    </p>
                                </div>

                                    <div className='btn-container-div'>
                                        <Button title='Peça agora' link="#" />
                                    </div>
                            </div>

                                <div className='banners-photos'>
                                    <img className='img-banner-principal' src={banner} alt="" />
                                </div>

                        </div>

            {/* FIM DA DIV DOS BANNERS */}

            {/* DIV DE COMPONENTS PARA DESTACAR OS FAVORITOS */}

                                            <div className='container-favorites'>
                                                    <div className='layout-container-favorites'>

                                                       <div className='favorites-components'>

                                                        <FavComponent nome={'Vanilla Script'} preco={'R$ 6,49'} foto={foto1} />

                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'Full Stack Fuel'} preco={'R$ 7,49'} foto={foto2} />
                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'HTML Haze'} preco={'R$ 7,49'} foto={foto3} />
                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'Node Nectar'} preco={'R$ 7,49'} foto={foto4} />
                                                       </div>


                                                       <div className='favorites-bg'></div>
                                                </div>

                                            </div>
            {/* FIM DA DIV FAVORITES*/}




            {/* INICIO DA DIV DELIVERY */}
                                            <div className='contain-delivery'>

                                                    <div className='delivery-title'>
                                                        <h2>Como funciona nosso
                                                            <span> Delivery</span>
                                                        </h2>
                                                    </div>

                                                            <div className='delivery-elements'>
                                                                <div>
                                                                    <img src={coffe} alt="" />
                                                                </div>

                                                                <div>
                                                                    <img src={car} alt="" />
                                                                </div>

                                                                <div>
                                                                    <img src={coffeEnd} alt="" />
                                                                </div>

                                                            </div>


                                            </div>

            {/* FIM DA DIV DELIVEY */}



        </div> {/* FIM DA DIV GERAL */}
    </>
  )
}

export default Home;
