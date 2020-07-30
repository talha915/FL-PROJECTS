import React, { Component } from 'react';

/* Styles */
import '../styles/main.css';

/* Data */
import SidebarData from '../Data/Sidebar.json';

/* Router */
import {withRouter} from 'react-router-dom';

class Sidebar extends Component {

    constructor(props, context) {
        super(props, context);
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
                                <i className={data.iconType}></i>
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
        this.props.history.push(Indexkey.redirect);
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
export default withRouter(Sidebar);