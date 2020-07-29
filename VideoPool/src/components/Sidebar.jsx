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
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill"  role="tab" aria-selected="true">
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

    render() {
        return (
            <aside className="aside">
                <ul className="nav nav-pills main-nav-pills" role="tablist">
                    {this.getSideBarData()}           
                </ul>
            </aside>
        )
    }
}
export default Sidebar;