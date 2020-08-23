import React, { Component } from 'react';
import '../../src/styles/main.css';

class Header extends Component {
    render() {
        return(
            <header id="header">
				<div className="container-fluid">
					<div className="d-flex align-items-center justify-content-between">
						<div className="logo order-2 order-md-1"><a href="#"><span className="logo-text">Project Name</span></a></div>
					</div>
				</div>
			</header>
        )
    }
}

export default Header;