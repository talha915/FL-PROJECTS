import React, { Component } from 'react';

import Videos from './Video/Videos';
import Header from './Header';
class Video extends Component {
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
                    <Videos />
                </div>
            </div>
        )
    }
}

export default Video;