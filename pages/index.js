import Head from 'next/head'
import React from 'react'

//import loginUserIcon from '../styles/icons/loginUserIcon.svg'

export default function Home() {

  const Login = () => (<>
    <span> Inicio de sesión </span>
    <form>
      <div id="input_container">
        <input type="text" placeholder="Usuario" />
        <img src="./icons/loginUserIcon.svg" id="input_img" />
      </div>
      <div id="input_container">
        <input type="text" placeholder="Contraseña" />
        <img src="./icons/loginPasswordIcon.svg" id="input_img" />
      </div>
      <button type="submit"> Iniciar sesión </button>
    </form>
  </>
  )

  return (
    <div className="login-root">
      <Head>
        <title>OLSoftware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="login-texto">
          <span> Aplicación OLSoftware </span>
          <p> Prueba práctica Front-end senior </p>
        </div>

        <div className="login-form">
          <Login />
        </div>
      </main>
      
      <footer className="footer-login">
        OLSoftware - 2020
      </footer>
    </div>
  )
}
