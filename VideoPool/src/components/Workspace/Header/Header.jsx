import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="main-header">
				<div className="d-flex align-items-center justify-content-between">
					<div className="holder d-flex align-items-center">
						<div className="logo"><a href="#"><span className="logo-text">My Workspace</span></a></div>
						<ul className="main-nav">
							<li><a href="#">Project</a></li>
							<li className="active"><a href="#">Branding</a></li>
							<li><a href="#">Setting</a></li>
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