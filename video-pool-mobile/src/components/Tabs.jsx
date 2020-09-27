import React, { Component } from 'react';
import '../../src/styles/main.css';

import TabsList from '../Data/Tab.json';

/* Router */
import {withRouter} from 'react-router-dom';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: ''
        }
    }

    componentDidMount() {
        this.setTabs();
    }

    setTabs=()=> {
        this.setState({tabList: TabsList});
    }

    workSpace=()=> {
        this.props.history.push('/workspace/project');
    }

    route=(data)=> {
        this.props.history.push(data);
    }

    getTabs=()=> {
        if(this.state.tabList) {
            let tabsData = this.state.tabList.tabs.map((data, index)=> {
                return(
                    <li className="nav-item" key={index} onClick={()=>this.route(data.route)}>
                        <a className="nav-link" data-toggle="pill" href="#" role="tab" aria-selected="false">
                            <span className="align">
                                <i className={data.icon}></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            });
            return tabsData;
        }
    }

    render() {
        return (
            <main>
                <div className="dashboard-wrap">
                    <div className="container-fluid">
                        <div className="main-tabs-wrap">
                            
                            <aside className="aside">
                                <ul className="nav nav-pills main-nav-pills" role="tablist">
                                    {this.getTabs()}
                                </ul>
                            </aside>
                            <div className="personal-poll">
                                <div className="icon-logo">
                                    <a href="#" onClick={this.workSpace}><img src="images/logo-v.png" width="80" height="70" alt="image description" /></a>
                                </div>
                                <div className="large-text">
                                    <p>Hi, add a video clip to start creating your personal poll</p>
                                </div>
                                <div className="btn-wrap">
                                    <a href="#" className="btn btn-primary btn-sm"><i className="icon-recording"></i> Record</a>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="icon-upload"></i> Upload</a>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="icon-url"></i> URL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default withRouter(Tabs);