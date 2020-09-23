import react from 'react';
import BaseComponent from './BaseComponent';

class LeftPanel extends BaseComponent{
    constructor(props){
        super(props);
        this.state = { itemSelected: 'roles' };
        this.handleItemSelected = this.handleItemSelected.bind(this);
    }

    handleItemSelected(e){
        const id = e.target;
        e.persist();
        this.setState( {itemSelected: id} );
        console.log(id);
    }

    render(){
        const {isOpenMenu} = this.props;
        return(
            <div className={`leftpanel-root`} id={`${isOpenMenu&&'panel-open'}`} >
                <ul>
                    <li> <div className="leftpanel-icon"> <div className="circle"> </div> </div> <span> OLSoftware </span> </li>
                    <hr/>
                    <li onClick={this.handleItemSelected} id='programacion'> <div className="leftpanel-icon"> <img src="./icons/mapa.svg"/> </div> <p> Programación </p> <div className="triangulo"></div> </li>
                    <li onClick={this.handleItemSelected} id='gestionOperaciones'> <div className="leftpanel-icon"> <img src="./icons/menu.svg"/> </div> <p> Gestión de operaciones </p> <div className="triangulo"></div> </li>
                    <li onClick={this.handleItemSelected} id='perfiles'> <div className="leftpanel-icon"> <img src="./icons/ajustes.svg"/> </div> <p> Perfiles </p> <div className="triangulo"></div>  </li>
                    <li onClick={this.handleItemSelected} id='roles'> <div className="leftpanel-icon"> <p> R </p> </div> <p> Roles </p> </li>
                    <li onClick={this.handleItemSelected} id='usuario'> <div className="leftpanel-icon"> <p> U </p> </div>  <p> Usuario </p>  </li>
                    <li onClick={this.handleItemSelected} id='reportes'> <div className="leftpanel-icon"> <img src="./icons/reportes.svg"/> </div> <p> Reportes </p> <div className="triangulo"></div> </li>
                </ul>
            </div>
        );
    }    
}


export default LeftPanel