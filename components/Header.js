import React from 'react'
import BaseComponent from './BaseComponent';

class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.myPanel = this.props.myPanel
        this.ajuste = this.props.ajuste
    }

    handleOpenMenu(e) {
        this.myPanel.current.toggleMenu();
        this.ajuste.current.id = this.ajuste.current.id==="home-ajustar"?"":"home-ajustar"
    }

    render() {
        return (
                <div className="header">
                    <div className="header-toggle">
                        <img src={BaseComponent.Constantes.menuAbierto} onClick={this.handleOpenMenu} />
                        <h1> Prueba Front-end </h1>
                    </div>
                    <div className="header-userinfo">
                        <img src={BaseComponent.Constantes.cuenta} />
                        <h2> {BaseComponent.dataLogged.fullname}</h2>
                    </div>
                    <img className="header-logout" src={BaseComponent.Constantes.salida} onClick={this.logout} />
                </div>
        );
    }
}

export default Header;