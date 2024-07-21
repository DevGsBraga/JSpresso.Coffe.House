import './CadastroStyle.css';

import { Link } from 'react-router-dom';



// IMAGENS
import coffe from '../../assets/imgs/Login/frase-coffe.png'
import logo from '../../assets/svg/logo-coffe.svg'
import { useState } from 'react';

const Cadastro = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    const validaCadastro = () => {
        if(!email || !senha || !confirmaSenha) {
            alert('Por favor, preencha todos os campos!')
            return false
        }

        if(senha !== confirmaSenha) {
            alert('As senhas não são iguais!')
            return false
        }


        return true

    }

    const enviarDadosAoBanco = (e) => {
        e.preventDefault()

        if(validaCadastro()) {
            console.log('Dados enviados ao banco')
            alert("Conta criada com sucesso!")
        }
    }











  return (
    <div id="container__login_cadastro">

            <div className="login__box_cadastro">

                <div className='box__left--login_cadastro'>

                    <div className='box__form_cadastro'>

                        <div className='form-title_cadastro'>
                            <div>

                                <img src={logo} alt="" />

                            </div>

                                <h2>Login</h2>
                        </div>

                            <div className='form-conteudo_cadastro'>



                                <form onSubmit={enviarDadosAoBanco}>
                                        <label className='conteudo-info-login_cadastro' htmlFor="text">E-mail:</label>
                                        <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} required  />

                                        <label className='conteudo-info-login_cadastro' htmlFor="text">Senha:</label>
                                        <input type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)}  required />

                                        <label className='conteudo-info-login_cadastro' htmlFor="text">Confirme sua senha:</label>
                                        <input type="password" value={confirmaSenha} onChange={(evento) => setConfirmaSenha(evento.target.value)}  required />


                                        <button type='submit' className='btn-form_cadastro'>Criar conta</button>
                                </form>

                            </div>


                                        <div className='form-btn-contain_cadastro'>

                                            <div className='contain-criar-conta_cadastro'>
                                                <p>Já tem uma conta? <Link to={'/login'} style={{color: '#f9d9aaee'}}>Entre</Link></p>
                                            </div>

                                        </div>
                    </div>

                </div>


                {/* CONTAINER DIREITO */}



            <div className='container-login-right_cadastro'>
                    <div className='login-right-img_cadastro'>

                        <img className='img-login_cadastro' src={coffe} alt="" />

                    </div>
            </div>





            </div>
    </div>
  )
}

export default Cadastro;
