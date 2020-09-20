import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="user-box">
                    <div className="img-box">
                        <span>FX</span>
                    </div>
                    <div className="text-box">
                        <strong className="name">Enter Name</strong>
                        <a className="mail" href="#">foxylady@gmail.com</a>
                    </div>
                </div>
                <ul className="list">
                    <li><a href="#">Workspaces</a></li>
                    <li><a href="#">Create+</a></li>
                </ul>
                <div className="menu-holder">
                    <ul className="side-nav">
                        <li className="active"><a href="#">
                            <img className="icon" src="/images/folder.png" width="37" height="36" alt="img description" /> My Workspace</a>
                        </li>
                    </ul>
                </div>
                <ul className="info-nav">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Report a bug</a></li>
                    <li><a href="#">Request a feature</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </aside>
        )
    }
}

export default Sidebar;