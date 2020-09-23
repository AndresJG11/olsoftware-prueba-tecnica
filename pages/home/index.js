import React from 'react'
import BaseComponent from '../components/BaseComponent';
import LeftPanel from '../components/LeftPanel'

import TablaUsuarios from '../components/TablaUsuarios'

class index extends BaseComponent {

    constructor(props) {
        super(props);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.state = { isOpenMenu: false }
    }

    handleOpenMenu(e) {
        this.setState({ isOpenMenu: !this.state.isOpenMenu })
    }

    render() {
        const { isOpenMenu } = this.state
        return (
            <div className="home-root">

                <LeftPanel isOpenMenu={isOpenMenu} />

                <div className="home-body " id={`${isOpenMenu && 'home-ajustar'}`}>

                    <div className="home-header">
                        <div className="header-toggle">
                            <img src="./icons/menu-abierto.svg" onClick={this.handleOpenMenu} />
                            <h1> Prueba Front-end </h1>
                        </div>
                        <div className="header-userinfo">
                            <img src="./icons/cuenta.svg" />
                            <h2> {/*BaseComponent.dataLogged.fullname*/} Andrés Jiménez García</h2>
                        </div>
                        <img className="home-logout" src="./icons/salida.svg" onClick={this.logout} />
                    </div>

                    <div className="home-contenido">
                        <TablaUsuarios/>
                    </div>

                </div>

                <footer>
                    <p>
                        OLSoftware - 2020
                    </p>
                </footer>

            </div>
        )
    }
}

export default index;
