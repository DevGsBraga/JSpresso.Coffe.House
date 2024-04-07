import './HomeStyle.css';    // CSS GERAL



// ANIMAÇÃO

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


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


const Home = () => {

    // AQUI FICA TODA O CÓDIGO DE ANIMAÇÃO

        const container = useRef(null);
        const favorites = useRef(null);
        const logoImg = useRef(null);

    useGSAP(() => {

        const animaTitle = container.current
        const animaFavorites = favorites.current
        const animaImg = logoImg.current



        const animacao = (element, eixoX, eixoY, startScroll) => {
            gsap.fromTo(element, {
                opacity: 0,
                x: eixoX,
                y: eixoY,
              }, {
                  duration:2,
                  opacity: 1,
                  x: 0,
                  y: 0,
              }, {
                  scrollTrigger: {
                      trigger: startScroll,
                      scrub: 2,
                      start: "top 90%",
                      end: "bottom 30%",

                  }
              });
        }



        // CHAMADA DA FUNÇÃO DE ANIMAÇÃO
        animacao(animaTitle, 200, 0, ".container-cabecalho" );
        animacao(animaFavorites, 0, 200, '.container-favorites')
        animacao(animaImg, -200, 0, ".container-cabecalho" )

      }, );



    //   ANIMAÇÃO DA DIV DELIVERY

    const containerDeliveryRef = useRef(null)

    useGSAP(() => {

        const Delivery = containerDeliveryRef.current


        gsap.to(Delivery, {
            opacity: 1,
            y: 0,
            duration: 3

        }, {
            scrollTrigger: {
                trigger: '.contain-delivery',
                start: 'top center',
                end: 'bottom center',


            }
        })

    })























  return (
    <>
        <div className="container-cabecalho">
            <NavegacaoBar />

            {/* FIM DO CABEÇALHO DE NAVEGAÇÃO  */}

            {/* ------ BANNERS PRINCIPAIS ------ */}

                        <div className='container-banners'>
                            <div className='banners-titles' ref={container}>

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
                                    <img className='img-banner-principal' src={banner} alt="" ref={logoImg} />
                                </div>

                        </div>

            {/* FIM DA DIV DOS BANNERS */}

            {/* DIV DE COMPONENTS PARA DESTACAR OS FAVORITOS */}

                                            <div className='container-favorites' ref={favorites}>
                                                <div className='favorites-titles'>
                                                    <h2>Os mais <span className='title-borde'>pedidos</span></h2>
                                                </div>


                                                    <div className='layout-container-favorites'>

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
                                            <div className='contain-delivery' ref={containerDeliveryRef} >

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


        </div> {/* FIM DA DIV GERAL */}
    </>
  )
}

export default Home;
