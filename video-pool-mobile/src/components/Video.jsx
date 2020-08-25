import React, { Component } from 'react';

import Videos from './Video/Videos';
import Header from './Header';
class Video extends Component {
    render() {
        return (
            <div id="page">
                <div className="dashboard-page">
                    <Header />
                    <Videos />
                </div>
            </div>
        )
    }
}

export default Video;