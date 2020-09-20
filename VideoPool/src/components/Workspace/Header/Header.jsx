import React, { Component } from 'react';

// HeaderData
import HeaderData from '../Data/Header.json';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerData: ''
        }
    }

    componentDidMount() {
        this.setHeader();
    }

    setHeader=()=> {
        this.setState({headerData: HeaderData.header})
    }

    getHeaderList=()=> {
        if(this.state.headerData) {
            console.log("Window loc: ", window.location.pathname)
            let headerList = this.state.headerData.navList.map((data, index)=> {
                return(
                    <li key={index} className={window.location.pathname === data.path ? "active" : ""}><a href="#">{data.name}</a></li>
                )
            })
            return headerList;
        }
    }

    render() {
        return(
            <div className="main-header">
				<div className="d-flex align-items-center justify-content-between">
					<div className="holder d-flex align-items-center">
						<div className="logo"><a href="#"><span className="logo-text">My Workspace</span></a></div>
						<ul className="main-nav">
							{/* <li><a href="#">Project</a></li>
							<li className="active"><a href="#">Branding</a></li>
							<li><a href="#">Setting</a></li> */}
                            {this.getHeaderList()}
						</ul>
					</div>
					<div className="btn-holder d-flex align-items-center">
						<a href="#" className="btn-txt">T</a>
						<a href="#" className="btn btn-outline-purple">Invite</a>
						<a href="#" className="btn btn-primary">
							<span className="btn-text d-none d-md-inline-block">New Projects</span>
							<i className="icon-plus-outline"></i>
						</a>
					</div>
				</div>
			</div>
        )
    }
}

export default Header;