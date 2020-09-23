import react, {Component} from 'react'

import Router       from 'next/router';
import { login, usuariosExistentes } from './helper';

import Constantes from './Constantes'


class BaseComponent extends Component{

    static Constantes = Constantes
    static isLogged = false;
    static dataLogged = {};

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.isLogged = this.isLogged.bind(this);
        this.logout = this.logout.bind(this);
        this.redirectTo = this.redirectTo.bind(this);

    }
    
    componentDidMount(){
        if(!BaseComponent.isLogged){
            this.redirectTo("/login", "/login");
        }
    }
    
    login(data){
        BaseComponent.isLogged = true;
        BaseComponent.dataLogged = data;
        this.redirectTo('/home','/home')
    }

    logout(){
        BaseComponent.isLogged = false;
        BaseComponent.dataLogged = {};
        this.redirectTo("/login", "/login");  
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