import './HomeStyle.css';    // CSS GERAL



// ANIMAÇÃO
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



// IMAGENS
import banner from "../../assets/svg/banner-coffe.svg";

// IMPORTE DE COMPONENTS
import Button from '../../components/Button/Button';
import FavComponent from '../../components/FavoriteComponent/FavComponent';
import NavegacaoBar from '../../components/Navegacao/NavegacaoBar';

// IMPORTE DAS FOTOS DOS COMPONENTS FAVORITOS
import foto1 from '../../assets/imgs/foto1.svg';
import foto2 from '../../assets/imgs/foto2.svg';
import foto3 from '../../assets/imgs/foto3.svg';
import foto4 from '../../assets/imgs/foto4.svg';

// IMPORTE DAS IMAGENS DELIVERY
import coffe from '../../assets/imgs/Delivery/coffe-icon.svg';
import car from '../../assets/imgs/Delivery/car-icon.svg';
import coffeEnd from '../../assets/imgs/Delivery/coffeEnd.svg';

// IMPORTAÇÕES DA IMAGEM DO SOBRE
import logoSobre from '../../assets/imgs/Sobre/img-sobre.svg';

// IMPORTAÇÃO DOS MELHORES PRODUTOS
import produto1 from '../../assets/imgs/Produtos/produto1.svg';
import produto2 from '../../assets/imgs/Produtos/produto2.svg';
import produto3 from '../../assets/imgs/Produtos/produto3.svg';
import produto4 from '../../assets/imgs/Produtos/produto4.svg';
import produto5 from '../../assets/imgs/Produtos/produto5.svg';
import produto6 from '../../assets/imgs/Produtos/produto6.svg';
import Footer from '../../components/Footer/Footer';




const Home = () => {

    // AQUI FICA TODA O CÓDIGO DE ANIMAÇÃO
    const favoritesRef = useRef(null);
    const deliveryRef = useRef(null);
    const sobreRef = useRef(null);
    const produtosRef = useRef(null);







    useEffect(() => {

        const favorites = favoritesRef.current; // ANIMA O CONTAINER DE FAVORITOS
        const delivery = deliveryRef.current; // ANIMA O CONTAINER DE DELIVERY
        const sobre = sobreRef.current; // ANIMA O CONTAINER DE SOBRE
        const produtos = produtosRef.current; // ANIMA O CONTAINER DE PRODUTOS



        function animarContainers(element, startX, startY, endX, endY, inicio, time) {
            gsap.fromTo(element, {
                opacity: 0,
                x: startX,
                y: startY,



            }, {
                opacity: 1,
                x:endX ,
                y:endY ,
                duration: time,
                scrollTrigger: {
                    trigger: inicio,
                    start: "top top",
                    bottom: "bottom center",

                }
            })
        }


        //  CHAMADA DAS ANIMAÇÕES
        animarContainers(favorites, 0, 200, 0, 0, '.banners-photos', .6);
        animarContainers(delivery, 0, 200, 0, 0, '.favorites-bg', .6);
        animarContainers(sobre, 0, 200,0 ,0, '.delivery-elements', .6);
        animarContainers(produtos, 0, 200,0 ,0, '.sobre-right-contain', .6);

    })
















  return (
    <>
            <NavegacaoBar />
        <div className="container-cabecalho">

            {/* FIM DO CABEÇALHO DE NAVEGAÇÃO  */}

            {/* ------ BANNERS PRINCIPAIS ------ */}

                        <div className='container-banners'>
                            <div className='banners-titles' >

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

                                <div className='banners-photos' >
                                    <img className='img-banner-principal' src={banner} alt=""  />
                                </div>

                        </div>

            {/* FIM DA DIV DOS BANNERS */}

            {/* DIV DE COMPONENTS PARA DESTACAR OS FAVORITOS */}

                                            <div className='container-favorites'  >
                                                <div className='favorites-titles'>
                                                    <h2>Os mais <span className='title-borde'>pedidos</span></h2>
                                                </div>


                                                    <div className='layout-container-favorites' ref={favoritesRef}>

                                                       <div className='favorites-components'>

                                                        <FavComponent nome={'Vanilla Script'} preco={'R$ 6,49'} foto={foto1} />

                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'Full Stack Fuel'} preco={'R$ 9,49'} foto={foto2} />
                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'HTML Haze'} preco={'R$ 4,49'} foto={foto3} />
                                                       </div>

                                                       <div className='favorites-components'>
                                                        <FavComponent nome={'Node Nectar'} preco={'R$ 7,49'} foto={foto4} />
                                                       </div>


                                                       <div className='favorites-bg'></div>
                                                </div>

                                            </div>
            {/* FIM DA DIV FAVORITES*/}




            {/* INICIO DA DIV DELIVERY */}
                                            <div className='contain-delivery' ref={deliveryRef}  >

                                                    <div className='delivery-title'>
                                                        <h2>Como funciona nosso
                                                            <span className='title-border'> Delivery</span>
                                                        </h2>
                                                    </div>

                                                            <div className='delivery-elements'>
                                                                <div className='elements-gp'>
                                                                    <img src={coffe} alt="" />
                                                                    <h3>Escolha seu café</h3>
                                                                    <p>há mais de 20 cafés para você!</p>
                                                                </div>

                                                                <div className='elements-gp'>
                                                                    <img src={car} alt="" />
                                                                    <h3>Nós entregamos para você</h3>
                                                                    <p>Escolha o serviço de entrega</p>
                                                                </div>

                                                                <div className='elements-gp'>
                                                                    <img src={coffeEnd} alt="" />
                                                                    <h3>Aproveite seu café</h3>
                                                                    <p></p>
                                                                </div>

                                                            </div>


                                            </div>

            {/* FIM DA DIV DELIVEY */}

            {/* INICIO DA DIV SOBRE */}

                <div className='container-sobre' ref={sobreRef}>

                    <div className='sobre-left-contain'>

                        <div className='left-contain-img'>
                            <img src={logoSobre} alt="" />
                        </div>

                    </div>

                    <div className='sobre-right-contain'>
                        <div className='right-contain-titles'>

                            <h3>
                                Sobre <span className='title-border-span'>nós</span>
                            </h3>

                            <p>
                                Fornecemos café de qualidade e pronto para entregar.
                            </p>

                            <span>
                                Bem-vindo à nossa cafeteria DEV! Aqui, o café é tão essencial quanto o código. Nosso segredo? Uma receita especial que mantém os devs funcionando em todo o mundo. Entre, relaxe e recarregue - com café forte e piadas nerds. Aqui, cada gole é um byte de inspiração!
                            </span>

                        </div>
                    </div>
                </div>
            {/* FIM DA DIV SOBRE */}

            {/* INICIO DIV MELHORES PRODUTOS */}

                        <div className='container-melhores-products' ref={produtosRef} >

                            <div className='products-title'>
                                <h3>
                                    Menu selecionado especialmente para <span>você</span>
                                </h3>

                            </div>

                                <div className='products-elements'>

                                    <div>
                                        <FavComponent nome={'Reactpresso'} preco={'R$ 7,47'} foto={produto1} />
                                    </div>

                                    <div>
                                        <FavComponent nome={'Full Stack Fuel'} preco={'R$ 9,49'} foto={produto2} />
                                    </div>

                                    <div>
                                        <FavComponent nome={'NodeBrew'} preco={'R$ 5,47'} foto={produto3} />
                                    </div>

                                    <div>
                                        <FavComponent nome={'RubyRoast'} preco={'R$ 8,47'} foto={produto4} />
                                    </div>

                                    <div>
                                        <FavComponent nome={'JavaScriptJolt'} preco={'R$ 6,47'} foto={produto5} />
                                    </div>

                                    <div>
                                        <FavComponent nome={'HTMLattee'} preco={'R$ 11,47'} foto={produto6} />
                                    </div>


                                </div>

                        </div>



            {/* FIM DA DIV MELHORES PRODUTOS */}



                            <Footer />
        </div>
            {/* FIM DA DIV GERAL */}

    </>
  )
}

export default Home;
