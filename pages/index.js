import Head from 'next/head'
import React from 'react'
import BaseComponent from './components/BaseComponent';

//import loginUserIcon from '../styles/icons/loginUserIcon.svg'


class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();

    this.state = {isLoading: false}
  }

  render() {

    const {isLoading} = this.state

    const handleOnSubmit = async (e) => {
      e.preventDefault();

      this.setState( {isLoading: true} )

      const username = this.username.current.value
      const password = this.password.current.value

      const self = this;
      await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      })
        .then((response) => response.json())
        .then(async function (responseJson) {
          if (responseJson[0] !== false) {
            self.username.current.value = "";
            self.password.current.value = "";
            self.login(responseJson[0]);
            self.redirectTo("/home", "/home");
          }
          else {
            console.log("fallo al iniciar sesion")
          }
        })
        .catch((error) => {
          console.error(error);
        });


    }

    return (
      <div className="login-root">
        <Head>
          <title>OLSoftware</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={`${isLoading&&'loading'} `}>
          <div className="login-texto">
            <span> Aplicación OLSoftware </span>
            <p> Prueba práctica Front-end senior </p>
          </div>

          <div className="login-form">
            <span> Inicio de sesión </span>
            <form onSubmit={handleOnSubmit}>
              <div id="input_container">
                <input type="text" placeholder="Usuario" ref={this.username} defaultValue="user" />
                <img src="./icons/loginUserIcon.svg" id="input_img" />
              </div>
              <div id="input_container">
                <input type="password" placeholder="Contraseña" ref={this.password} defaultValue="user" />
                <img src="./icons/loginPasswordIcon.svg" id="input_img" />
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

export default Home;