import './LoginStyle.css';

import { Link } from 'react-router-dom';


// IMAGENS
import coffe from '../../assets/imgs/Login/frase-coffe.png'
import logo from '../../assets/svg/logo-coffe.svg'

const Login = () => {
  return (
    <div id="container__login">

            <div className="login__box">

                <div className='box__left--login'>

                    <div className='box__form'>

                        <div className='form-title'>
                            <div>

                                <img src={logo} alt="" />

                            </div>

                                <h2>Login</h2>
                        </div>

                            <div className='form-conteudo'>

                                <form action="">
                                        <label className='conteudo-info-login' htmlFor="text">E-mail:</label>
                                        <input type="email" />

                                        <label className='conteudo-info-login' htmlFor="text">Senha:</label>
                                        <input type="text" />
                                </form>

                            </div>


                                        <div className='form-btn-contain'>

                                            <button className='btn-form'>Entrar</button>


                                            <div className='contain-criar-conta'>
                                                <p>Ainda não tem uma conta? <Link style={{color: '#f9d9aaee'}}>Criar agora</Link></p>
                                            </div>

                                        </div>
                    </div>

                </div>


                {/* CONTAINER DIREITO */}



            <div className='container-login-right'>
                    <div className='login-right-img'>

                        <img className='img-login' src={coffe} alt="" />

                    </div>
            </div>





            </div>
    </div>
  )
}

export default Login
