import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="holder d-flex align-items-center">
                <a className="nav-opener" href="#"><span></span></a>
                <ul className="main-nav">
                    <li className="active"><a href="#"><img className="ico project-icon" src="/images/project-icon.svg" alt="img description" /> Project</a></li>
                    <li><a href="#"><img className="ico branding-icon" src="/images/branding-icon.svg" alt="img description" /> Branding</a></li>
                    <li><a href="#"><img className="ico setting-icon" src="/images/setting-icon.svg" alt="img description" /> Setting</a></li>
                </ul>
            </div>
        )
    }
}

export default Footer;