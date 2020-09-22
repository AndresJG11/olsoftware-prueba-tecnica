import React from 'react'
import BaseComponent from '../components/BaseComponent';
import LeftPanel from '../components/LeftPanel'

class index extends BaseComponent {

    constructor(props){
        super(props);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.state = { isOpenMenu: false }
    }

    handleOpenMenu(e){
        this.setState( {isOpenMenu: !this.state.isOpenMenu} )
    }

    render() {
        const {isOpenMenu} = this.state 
        return (
            <div className="home-root">
                <LeftPanel isOpenMenu={isOpenMenu} />
                <div className="home-contenido " id={`${isOpenMenu&&'home-ajustar'}`}>
                    <div className="home-header">
                        <div className="header-toggle">
                            <img src="./icons/menu-abierto.svg" onClick={this.handleOpenMenu}/>
                            <h1> Prueba Front-end </h1>
                        </div>
                        <div className="header-userinfo">
                            <img src="./icons/cuenta.svg" />
                            <h2> {/*BaseComponent.dataLogged.fullname*/} Andrés Jiménez García</h2>
                        </div>
                        <img className="home-logout" src="./icons/salida.svg" onClick={this.logout} />
                    </div>
                </div>
            </div>
        )
    }
}

export default index;
