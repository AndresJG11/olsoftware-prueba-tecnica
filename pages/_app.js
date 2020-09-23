import '../styles/globals.scss'
import Head from 'next/head'
import LeftPanel from './components/LeftPanel'
import { Component } from 'react';
import Header from './components/Header';
import BaseComponent from './components/BaseComponent';
import Home from './index'

class MyApp extends BaseComponent {
  constructor(props) {
    super(props)

    this.myPanel = React.createRef();
    this.ajuste = React.createRef();
  }

  componentDidMount() {
  	window.onload = (e) => {
        if ('serviceWorker' in navigator) {

            navigator.serviceWorker.register('./svcWorker.js', {useCache: true}).then(function(registration) {
               console.log('Worker registration is successful', registration.scope);
            }, function(err) {
                console.log('Worker registration has failed', err);
            }).catch(function(err) {
                console.log(err);
        	});
        } else {
            console.log('Service Worker is not supported by your browser.');
        }
      window.addEventListener('beforeinstallprompt', (e) => {
			console.log(e);
      });
  }
  }
  
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>OLSoftware</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        {(BaseComponent.isLogged) ? <>
          <LeftPanel ref={this.myPanel} />
          <div className="home-body" ref={this.ajuste}>
            <Header myPanel={this.myPanel} ajuste={this.ajuste} />
            <Component {...pageProps} myPanel={this.myPanel} />
          </div>
            <footer>
              <p>
                OLSoftware - 2020
                </p>
            </footer>
        </>
          : <div>
            <Component {... pageProps} />
            </div>}
      </>
    );
  }
}

export default MyApp
