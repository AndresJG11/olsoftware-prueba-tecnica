import React from 'react'
import BaseComponent from './components/BaseComponent';

class Home extends BaseComponent {

  componentDidMount(){
    this.redirectTo('/login', '/login')
  }

  render() {
    return (
      <p>  </p>
    );
    }

  }

export default Home;