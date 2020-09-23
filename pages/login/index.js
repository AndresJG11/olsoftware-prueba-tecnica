import React from 'react'
import BaseComponent from '../components/BaseComponent';
import { login } from '../components/helper';

class Login extends BaseComponent {

    constructor(props) {
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
    
        this.state = { isLoading: false }
      }

    render() {

        const { isLoading } = this.state
    
        const handleOnSubmit = async (e) => {
          e.preventDefault();
    
          this.setState({ isLoading: true })
    
          const username = this.username.current.value
          const password = this.password.current.value
    
          login(username, password, this);
    
    
        }
        return (
          <div className="login-root">
            <div className="login-background">
              <div className="login-background-effect">
              </div>
            </div>
    
            <main className={`${isLoading && 'loading'} `}>
              <div className="login-texto">
                <span> Aplicación OLSoftware </span>
                <p> Prueba práctica Front-end senior </p>
              </div>
    
              <div className="login-form">
                <span> Inicio de sesión </span>
                <form onSubmit={handleOnSubmit}>
                  <div id="input_container">
                    <input type="text" placeholder="Usuario" ref={this.username} defaultValue="user" autoComplete="off" />
                    <img src={BaseComponent.Constantes.loginUserIcon} id="input_img" />
                  </div>
                  <div id="input_container">
                    <input type="password" placeholder="Contraseña" ref={this.password} defaultValue="user" autoComplete="off" />
                    <img src={BaseComponent.Constantes.loginPasswordIcon} id="input_img" />
                  </div>
                  <button type="submit"> Iniciar sesión </button>
                </form>
              </div>
              <div className="modal">
                <div className="modal-vista">
                  <h1> Estamos preparando todo para tí </h1>
                  <img src="./loading.gif" />
                </div>
              </div>
            </main>
    
          <footer className="footer-login">
              OLSoftware - 2020
          </footer>
    
          </div>
        );
      }
}
//<TablaUsuarios />

export default Login;
