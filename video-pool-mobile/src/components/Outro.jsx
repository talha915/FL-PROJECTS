import React, { Component } from 'react';

import Outros from './Outro/Outros';
import Header from './Header';


class Outro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: 0
        }
    }
    
    render() {
        return (
            <div id="page">
                <div className="dashboard-page">
                    <Header routeProps={this.state.routes}/>
                    <Outros />
                </div>
            </div>
        )
    }
}

export default Outro;