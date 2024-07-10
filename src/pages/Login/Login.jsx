import './LoginStyle.css';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';



// IMAGENS
import coffe from '../../assets/imgs/Login/frase-coffe.png'
import logo from '../../assets/svg/logo-coffe.svg'

const Login = () => {

    // LÓGICA DE LOGIN
    const [email, setEmail] = useState('')  // TRATA O EMAIL DO USUÁRIO
    const [password, setPassword] = useState('') // TRATA A SENHA DO USUÁRIO


    // FUNÇÃO PARA VALIDAR O LOGIN
    const autenticaLogin = async (conteudo) => {

        conteudo.preventDefault()


        // TRY CATCH PARA TRATAR SUCESSO E ERROS
        try {
            const resposta = await axios.get('http://localhost:3000/auth/login', {email, password})
            console.log(resposta.data)

        } catch (error) {
            console.error(error)
        }




    }

















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

                                <form onSubmit={autenticaLogin}>
                                        <label className='conteudo-info-login' htmlFor="text">E-mail:</label>

                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  />

                                        <label className='conteudo-info-login' htmlFor="text">Senha:</label>

                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />


                                        <button type='submit' className='btn-form'>Entrar</button>
                                </form>

                            </div>


                                        <div className='form-btn-contain'>



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
