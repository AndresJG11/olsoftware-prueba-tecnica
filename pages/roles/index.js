import React from 'react'
import BaseComponent from '../../components/BaseComponent';

import TablaUsuarios from '../../components/TablaUsuarios'

class index extends BaseComponent {

    constructor(props) {
        super(props);
        this.myPanel = this.props.myPanel
        this.state = { isOpenMenu: false }
    }

    render() {
        return (
            <div className="home-root">
                <div className="home-contenido">
                    <TablaUsuarios />
                </div>
            </div>
        )
    }
}

export default index;
