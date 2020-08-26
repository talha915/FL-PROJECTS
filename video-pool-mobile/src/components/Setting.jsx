import React, { Component } from 'react';

import Generals from './General/Generals';
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
                    <Generals />
                </div>
            </div>
        )
    }
}

export default Outro;