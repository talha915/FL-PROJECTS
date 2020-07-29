import React from 'react';

/* Styles */
import '../styles/main.css';

function Header() {
    return (
        <header id="header">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo order-2 order-md-1"><a href="#"><span className="logo-text">Project Name</span></a></div>
                    <a className="btn-back d-lg-none" href="#"><i className="icon-arrow-back"></i></a>
                    <a href="#" className="btn d-none d-lg-block btn-primary order-1 order-md-2"><i className="icon-arow-long-left"></i><span className="btn-text d-none d-md-inline-block">back to workspace</span></a>
                </div>
            </div>
        </header>
    )
}

export default Header;