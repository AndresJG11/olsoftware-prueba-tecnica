import react, {Component} from 'react'

import Router       from 'next/router';
import { login, usuariosExistentes } from './helper';


class BaseComponent extends Component{

    static isLogged = true;
    static dataLogged = {};

    constructor(props){
        super(props);
        //this.redirectTo = this.redirectTo.bind(this);
    
        //this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.isLogged = this.isLogged.bind(this);
        this.logout = this.logout.bind(this);
        this.redirectTo = this.redirectTo.bind(this);
    }

    componentDidMount(){

    }
    
    login(data){
        BaseComponent.isLogged = true;
        BaseComponent.dataLogged = data;
    }

    logout(){
		BaseComponent.isLogged = false;
		BaseComponent.dataLogged = {};
		this.redirectTo("/", "/");
    }
    
    getUsuariosExistentes(){
        if(BaseComponent.isLogged){
            return usuariosExistentes();
        }
    }

    isLogged(){ return BaseComponent.isLogged }

    redirectTo(to, alias){
		Router.push(to, alias);
    }
    
}

export default BaseComponent;