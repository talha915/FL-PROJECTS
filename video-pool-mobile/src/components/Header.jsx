import React, { Component } from 'react';
import '../../src/styles/main.css';

/* Router */
import {withRouter} from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			router: ''
		}
	}

	componentWillReceiveProps() {
		let routes = this.props.routeProps;
		this.setState({router: routes});
	}

	backRoute=()=> {
		this.props.history.push('/');
	}

    render() {
		
        return(
            <header id="header">
				<div className="container-fluid">
					<div className="d-flex align-items-center justify-content-between">
						<div className="logo order-2 order-md-1"><a href="#"><span className="logo-text">Project Name</span></a></div>
						{this.state.router == 0 ? <a className="btn-back" href="#" onClick={()=>this.backRoute()}><i className="icon-arrow-back"></i></a>: ''}
					</div>
				</div>
			</header>
        )
    }
}

export default withRouter(Header);