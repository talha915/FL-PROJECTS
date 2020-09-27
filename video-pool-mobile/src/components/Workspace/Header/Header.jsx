import React, { Component } from 'react';

// HeaderData
import HeaderData from '../Data/Header.json';

/* Router */
import { withRouter } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerData: '',
            sidebarStatus: ''
        }
    }

    componentDidMount() {
        this.setHeader();
    }

    setHeader = () => {
        this.setState({ headerData: HeaderData.header });
    }

    route=(data)=> {
        this.props.history.push(data);
    }

    getHeaderList = () => {
        if (this.state.headerData) {
            let data = this.state.headerData.navList;
            let headerList = data.map((datas, index) => {
                return (
                    <li key={index} className={window.location.pathname === datas.path ? "active" : ""} onClick={()=>this.route(datas.path, index)}><a href="#"><img className={datas.icon} src={datas.img} alt="img description" /> {datas.name}</a></li>
                )
            })
            return headerList;
        }
    }

    openSidebar = () => {
        if (this.state.sidebarStatus && this.state.sidebarStatus) {
            this.setState({ sidebarStatus: false });
        }
        else {
            this.setState({ sidebarStatus: true });
        }
        this.props.sendSide(this.state.sidebarStatus);
    }

    render() {
        return (
            <div className="main-header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="holder d-flex align-items-center">
                        <a className="nav-opener" href="#" onClick={this.openSidebar}><span></span></a>     
                        <ul className="main-nav">
                            {this.getHeaderList()}
                        </ul>
                    </div>
                    <div className="btn-holder d-flex align-items-center">
                        <a href="#" className="btn-txt">T</a>
                        <a href="#" className="btn btn-outline-purple">Invite</a>
                        <a href="#" className="btn btn-primary">
                            <span className="btn-text">New Projects</span>
                            <i className="icon-plus-outline"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);