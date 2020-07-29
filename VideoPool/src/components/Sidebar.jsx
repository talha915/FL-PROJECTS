import React, { Component } from 'react';

/* Styles */
import '../styles/main.css';

/* Data */
import SidebarData from '../Data/Sidebar.json';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarList: ''
        }
    }

    componentDidMount() {
        this.setSideBarData();
    }

    setSideBarData=()=> {
        this.setState({sidebarList: SidebarData});
    }

    getSideBarData=()=> {
        if(this.state.sidebarList) {
            let sidebarData = this.state.sidebarList.sidebarList.map((data, index)=> {
                return(
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active" : "nav-link"} href="#" onClick={()=>this.sidebarClick(index)}>
                            <span className="align">
                                <i className="icon icon-video"></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            })
            return sidebarData;
        }   
    }

    sidebarClick=(data)=> {
        let activeStatus = true;
        let inactiveStatus = false;
        for(let i=0; i<this.state.sidebarList.sidebarList.length; i++) {
            if(this.state.sidebarList.sidebarList[i].activeStatus === activeStatus) {
                this.state.sidebarList.sidebarList[i].activeStatus = inactiveStatus;
            }
        }
        let Indexkey = this.state.sidebarList.sidebarList[data];
        Indexkey.activeStatus = activeStatus;
    }

    render() {
        return (
            <aside className="aside">
                <ul className="nav nav-pills main-nav-pills">
                    {this.getSideBarData()}
                </ul>
            </aside>
        )
    }
}
export default Sidebar;