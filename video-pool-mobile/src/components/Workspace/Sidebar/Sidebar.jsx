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

    setSidebarData = () => {
        this.setState({ sidebarData: SidebarData.sidebar });
    }

    getSidebar = () => {
        if (this.state.sidebarData) {
            return (
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

    getRowList = () => {
        if (this.state.sidebarData) {
            let rowList = this.state.sidebarData.rowlist.map((data, index) => {
                return (
                    <li key={index}><a href="#">{data.name}</a></li>
                )
            });
            return rowList;
        }
    }

    getInfoList = () => {
        if (this.state.sidebarData) {
            let rowList = this.state.sidebarData.infoNavList.map((data, index) => {
                return (
                    <li key={index}><a href="#">{data.name}</a></li>
                )
            });
            return rowList;
        }
    }

    getMenu = () => {
        if (this.state.sidebarData) {
            let menus = this.state.sidebarData.menuHolderList.map((data, index) => {
                return (
                    <li className={index===0 ? "active": "inactive"} key={index}><a href="#">
                        <img className="icon" src={data.image} width="37" height="36" alt="img description" /> {data.name}</a>
                    </li>
                )
            })
            return menus;
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
                        {this.getMenu()}
                    </ul>
                </div>
                <ul className="info-nav">
                    {this.getInfoList()}
                </ul>
            </aside>
        )
    }
}

export default Sidebar;