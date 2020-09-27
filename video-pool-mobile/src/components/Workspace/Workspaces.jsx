import React, { Component } from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Project from './Project/Project';
import Footer from './Footer/Footer';

class Workspaces extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            sidebar: false
        }
    }

    getSidebar=(val)=> {
        this.setState({sidebar: val});
    }

    render() {
        return (
            <body className={this.state.sidebar && this.state.sidebar ? "nav-active" : ""}>
                <div className="workspace-page">
                    <Sidebar />
                    <div className="right-content">
                        <Header sendSide={this.getSidebar}/>
                        <Project />
                    </div>
                </div>
            </body>
        )
    }
}

export default Workspaces;