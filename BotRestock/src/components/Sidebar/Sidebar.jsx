import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';


import '../../styles/main.css';

class Sidebar extends Component {

    index=()=> {
        this.props.history.push('/');
    }

    settings=()=> {
        this.props.history.push('/settings');
    }

    render() {
        return (
            <aside className="aside">
                <div className="bullets">
                    <span></span>
                    <span className="bg-yellow"></span>
                    <span className="bg-green"></span>
                </div>
                <div className="aside-holder">
                    <nav className="aside-nav">
                        <ul>
                            <li className="active">
                                <a onClick={this.index}>
                                    <img className="normal" width="20" height="20" src="/images/dash.svg" alt="description" />
                                    <img className="over" width="20" height="20" src="/images/dash-hov.svg" alt="description" />
                                </a>
                            </li>
                            <li>
                                <a onClick={this.settings}>
                                    <img className="normal" width="19" height="20" src="/images/setting.svg" alt="description" />
                                    <img className="over" width="19" height="20" src="/images/setting-hov.svg" alt="description" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="logo"><a href="#"><img src="/images/logo.png" width="40" height="40" alt="BotRestockUI" /></a></div>
                </div>
            </aside>
        );
    }
}

export default withRouter(Sidebar);