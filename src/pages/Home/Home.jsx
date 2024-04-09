import './HomeStyle.css';    // CSS GERAL



// ANIMAÇÃO

import { useEffect } from "react";
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

// IMPORTAÇÕES DA IMAGEM DO SOBRE
import logoSobre from '../../assets/imgs/Sobre/img-sobre.svg';


const Home = () => {

    // AQUI FICA TODA O CÓDIGO DE ANIMAÇÃO


    useEffect(() => {
            const tl = gsap.timeline({duration: .3});

        function animarPadrao(elemnt, eixoX, eixoY, endX, endY, inicio) {
            tl.fromTo(elemnt, {
                opacity: 0,
                x: eixoX,
                y: eixoY,
            }, {
                opacity: 1,
                x: endX,
                y: endY,
                scrollTrigger: {
                    trigger: inicio,
                    start: 'top center',
                    end: 'bottom center'
                }
            })
        }

        animarPadrao('.btn-container-div', 0, 0, 0, 0);
        animarPadrao('.title-principal', -200, 0, 0, 0);
        animarPadrao('.banners-photos', 200, 0, 0, 0);
        animarPadrao('.container-favorites', 0, 200, 0 , 0);



        // DELIVERY

        animarPadrao('.delivery-elements', 0, 200, 0, 0, '.contain-delivery');







    })




    //   ANIMAÇÃO DA DIV DELIVERY

























  return (
    <>
        <div className="container-cabecalho">
            <NavegacaoBar />

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

                                            <div className='container-favorites' >
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
                                            <div className='contain-delivery'  >

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

                <div className='container-sobre'>

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



        </div>
            {/* FIM DA DIV GERAL */}
    </>
  )
}

export default Home;
