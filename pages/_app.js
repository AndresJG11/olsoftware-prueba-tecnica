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
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>OLSoftware</title>
          <link rel="icon" href="/favicon.ico" />
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
