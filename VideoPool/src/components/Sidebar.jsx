import React from 'react';

/* Styles */
import '../styles/main.css';

function Sidebar() {
    return (
        <aside className="aside">
            <ul className="nav nav-pills main-nav-pills" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="#video" role="tab" aria-selected="true">
                        <span className="align">
                            <i className="icon icon-video"></i>
                            <span className="text d-block">Video</span>
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#question" role="tab" aria-selected="false">
                        <span className="align">
                            <i className="icon icon-communications"></i>
                            <span className="text d-block">Question</span>
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#outro" role="tab" aria-selected="false">
                        <span className="align">
                            <i className="icon icon-chat"></i>
                            <span className="text d-block">Outro</span>
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#branding" role="tab" aria-selected="false">
                        <span className="align">
                            <i className="icon icon-branding"></i>
                            <span className="text d-block">Branding</span>
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#g-setting" role="tab" aria-selected="false">
                        <span className="align">
                            <i className="icon icon-interface"></i>
                            <span className="text d-block"><span className="d-none d-sm-inline">General</span> Setting</span>
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#results" role="tab" aria-selected="false">
                        <span className="align">
                            <i className="icon icon-results"></i>
                            <span className="text d-block">Results</span>
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar;