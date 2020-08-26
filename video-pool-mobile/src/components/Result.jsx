import React, { Component } from 'react';

import Results from './Results/Results';
import Header from './Header';


class Result extends Component {
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
                    <Results />
                </div>
            </div>
        )
    }
}

export default Result;