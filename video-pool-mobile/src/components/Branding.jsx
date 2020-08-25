import React, { Component } from 'react';

import Brandings from './Branding/Brandings';
import Header from './Header';


class Branding extends Component {
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
                    <Brandings />
                </div>
            </div>
        )
    }
}

export default Branding;