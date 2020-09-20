import React, { Component } from 'react';

// Data
import SidebarData from '../Data/Sidebar.json';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarData: ''
        }
    }

    componentDidMount() {
        this.setSidebarData();
    }

    setSidebarData=()=> {
        this.setState({sidebarData: SidebarData.sidebar});
    }

    getSidebar=()=> {
        if(this.state.sidebarData) {
            return(
                <div className="user-box">
                    <div className="img-box">
                        <span>{this.state.sidebarData.title}</span>
                    </div>
                    <div className="text-box">
                        <strong className="name">{this.state.sidebarData.name}</strong>
                        <a className="mail" href="#">{this.state.sidebarData.email}</a>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <aside className="sidebar">
                {this.getSidebar()}
                <ul className="list">
                    <li><a href="#">Workspaces</a></li>
                    <li><a href="#">Create+</a></li>
                </ul>
                <div className="menu-holder">
                    <ul className="side-nav">
                        <li className="active"><a href="#">
                            <img className="icon" src="/images/folder.png" width="37" height="36" alt="img description" /> My Workspace</a>
                        </li>
                    </ul>
                </div>
                <ul className="info-nav">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Report a bug</a></li>
                    <li><a href="#">Request a feature</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </aside>
        )
    }
}

export default Sidebar;