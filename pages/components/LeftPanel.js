import react from 'react';
import BaseComponent from './BaseComponent';

class LeftPanel extends BaseComponent{
    render(){
        const {isOpenMenu} = this.props;
        return(
            <div className={`leftpanel-root`} id={`${isOpenMenu&&'panel-open'}`} >
                <ul>
                    <li> <div className="circle"> </div> <span> OLSoftware </span> </li>
                    <hr/>
                    <li> <img src="./icons/mapa.svg"/> Programación </li>
                    <li> <img src="./icons/menu.svg"/> Gestión de operaciones </li>
                    <li> <img src="./icons/ajustes.svg"/> Perfiles </li>
                    <li> <span> R </span> Roles </li>
                    <li> <span> U </span> Usuario </li>
                    <li> <img src="./icons/reportes.svg"/> Reportes </li>
                </ul>
            </div>
        );
    }    
}


export default LeftPanel