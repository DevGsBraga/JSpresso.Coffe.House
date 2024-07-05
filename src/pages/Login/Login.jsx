import './LoginStyle.css';


// IMAGENS
import xicara from '../../assets/imgs/Login/xicara-cafe.png'
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
                                        <input type="text" />
                                        <input type="text" />
                                </form>



                            </div>
                    </div>

                </div>


                {/* CONTAINER DIREITO */}



            <div className='container-login-right'>
                    <div className='login-right-img'>

                        <img className='img-login' src={xicara} alt="" />

                    </div>
            </div>





            </div>
    </div>
  )
}

export default Login
