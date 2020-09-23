import react from 'react';
import BaseComponent from './BaseComponent';

class LeftPanel extends BaseComponent{
    constructor(props){
        super(props);
        this.state = { itemSelected: 'roles', isOpenMenu: false };
        this.handleItemSelected = this.handleItemSelected.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleItemSelected(e){
        e.persist();
        const {id} = e.target;
        this.setState( {itemSelected: id} );
        this.redirectTo('/constructionPage', '/constructionPage')
    }

    toggleMenu(){
        this.setState({isOpenMenu: !this.state.isOpenMenu})
    }

    render(){
        const {isOpenMenu, itemSelected} = this.state;
        return(
            <div className={`leftpanel-root`} id={`${isOpenMenu&&'panel-open'}`} >
                <ul>
                    <li> <div className="leftpanel-icon"> <div className="circle"> </div> </div> <span> OLSoftware </span> </li>
                    <hr/>
                    <li className={`${itemSelected==='programacion'&&'active'}`} onClick={this.handleItemSelected} id='programacion'> <div className="leftpanel-icon"> <img src={BaseComponent.Constantes.mapa}/> </div> <p> Programación </p> <div className="triangulo"></div> </li>
                    <li className={`${itemSelected==='gestionOperaciones'&&'active'}`} onClick={this.handleItemSelected} id='gestionOperaciones'> <div className="leftpanel-icon"> <img src={BaseComponent.Constantes.menu}/> </div> <p> Gestión de operaciones </p> <div className="triangulo"></div> </li>
                    <li className={`${itemSelected==='perfiles'&&'active'}`} onClick={this.handleItemSelected} id='perfiles'> <div className="leftpanel-icon"> <img src={BaseComponent.Constantes.ajustes}/> </div> <p> Perfiles </p> <div className="triangulo"></div>  </li>
                    <li className={`${itemSelected==='roles'&&'active'}`} onClick={this.handleItemSelected} id='roles'> <div className="leftpanel-icon"> <p> R </p> </div> <p> Roles </p> </li>
                    <li className={`${itemSelected==='usuario'&&'active'}`} onClick={this.handleItemSelected} id='usuario'> <div className="leftpanel-icon"> <p> U </p> </div>  <p> Usuario </p>  </li>
                    <li className={`${itemSelected==='reportes'&&'active'}`} onClick={this.handleItemSelected} id='reportes'> <div className="leftpanel-icon"> <img src={BaseComponent.Constantes.reportes}/> </div> <p> Reportes </p> <div className="triangulo"></div> </li>
                </ul>
            </div>
        );
    }    
}


export default LeftPanel