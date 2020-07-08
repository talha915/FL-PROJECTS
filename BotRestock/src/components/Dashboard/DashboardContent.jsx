import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/main.css';

class DashboardContent extends Component {

    createTask = () => {
        this.props.createTask(true);
    }

    createProfile = () => {
        this.props.createProfile(true);
    }

    render() {
        return (
            <div className="dashboard-content">
                <div className="section-head">
                    <h1>Tasks</h1>
                    <p><span className="text-white">8</span> Tasks</p>
                </div>
                <div className="sub-header">
                    <form className="search-form">
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-wrap">
                                    <i className="icon icon-lock"></i>
                                    <input type="search" placeholder="Global Password chage" />
                                </div>
                                <button className="btn btn-gradient" type="submit"><i className="icon-right-arrow"></i></button>
                            </div>
                        </div>
                    </form>
                    <div className="sub-header-right">
                        <div className="media-btns">
                            <a className="btn btn-success"><i className="icon-play"></i></a>
                            <a className="btn btn-warning"><i className="icon-stop"></i></a>
                            <a className="btn btn-danger"><i className="icon-cross"></i></a>
                        </div>
                        <div className="btn-block">
                            <a className="btn btn-secondary profile-opener" onClick={this.createProfile}><i className="icon-pencil"></i>Create Profile</a>
                            <a className="btn btn-primary task-opener" onClick={this.createTask}><i className="icon-plus"></i>Create Task</a>
                        </div>
                    </div>
                </div>
                <Scrollbars style={{height: 350}}>
                    <div className="table-data task">
                        <div className="thead">
                            <div className="tr">
                                <div className="th">ID</div>
                                <div className="th">Site</div>
                                <div className="th">Keyword</div>
                                <div className="th">Profile</div>
                                <div className="th">Status</div>
                                <div className="th">Actionis</div>
                            </div>
                        </div>

                        <div className="tbody">
                            <div className="tr">
                                <div data-title="ID" className="td"><div className="text">1</div></div>
                                <div data-title="Site" className="td"><div className="text"><a className="site-link" href="https://cybersole.io">https://cybersole.io</a></div></div>
                                <div data-title="Keyword" className="td">
                                    <div className="text">
                                        <span className="tags-wrap">
                                            <span className="tag">+Restock</span>
                                        </span>
                                    </div>
                                </div>
                                <div data-title="Profile" className="td"><div className="text">Privacy 1</div></div>
                                <div data-title="Status" className="td"><div className="text"><span className="status">Waiting for link</span></div></div>
                                <div data-title="Actionis" className="td">
                                    <div className="text">
                                        <ul className="action-list">
                                            <li><a><i className="icon-play"></i></a></li>
                                            <li><a><i className="icon-stop"></i></a></li>
                                            <li><a><i className="icon-pencil"></i></a></li>
                                            <li><a><i className="icon-cross"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tr">
                                <div data-title="ID" className="td"><div className="text">1</div></div>
                                <div data-title="Site" className="td"><div className="text"><a className="site-link" href="https://cybersole.io">https://cybersole.io</a></div></div>
                                <div data-title="Keyword" className="td">
                                    <div className="text">
                                        <span className="tags-wrap">
                                            <span className="tag">+Restock</span>
                                        </span>
                                    </div>
                                </div>
                                <div data-title="Profile" className="td"><div className="text">Privacy 1</div></div>
                                <div data-title="Status" className="td"><span className="text"><span className="status">Waiting for link</span></span></div>
                                <div data-title="Actionis" className="td">
                                    <div className="text">
                                        <ul className="action-list">
                                            <li><a><i className="icon-play"></i></a></li>
                                            <li><a><i className="icon-stop"></i></a></li>
                                            <li><a><i className="icon-pencil"></i></a></li>
                                            <li><a><i className="icon-cross"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tr idle">
                                <div data-title="ID" className="td"><div className="text">1</div></div>
                                <div data-title="Site" className="td"><span className="text"><a className="site-link" href="https://cybersole.io">https://cybersole.io</a></span></div>
                                <div data-title="Keyword" className="td">
                                    <span className="text">
                                        <span className="tags-wrap">
                                            <span className="tag">+Restock</span>
                                            <span className="tag not">-Not</span>
                                        </span>
                                    </span>
                                </div>
                                <div data-title="Profile" className="td"><div className="text">Privacy 1</div></div>
                                <div data-title="Status" className="td"><div className="text"><span className="status">Idle</span></div></div>
                                <div data-title="Actionis" className="td">
                                    <div className="text">
                                        <ul className="action-list">
                                            <li><a><i className="icon-play"></i></a></li>
                                            <li><a><i className="icon-stop"></i></a></li>
                                            <li><a><i className="icon-pencil"></i></a></li>
                                            <li><a><i className="icon-cross"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tr idle">
                                <div data-title="ID" className="td"><div className="text">1</div></div>
                                <div data-title="Site" className="td"><span className="text"><a className="site-link" href="https://cybersole.io">https://cybersole.io</a></span></div>
                                <div data-title="Keyword" className="td">
                                    <span className="text">
                                        <span className="tags-wrap">
                                            <span className="tag">+Restock</span>
                                            <span className="tag">+Live</span>
                                        </span>
                                    </span>
                                </div>
                                <div data-title="Profile" className="td"><div className="text">Privacy 1</div></div>
                                <div data-title="Status" className="td"><div className="text"><span className="status">Idle</span></div></div>
                                <div data-title="Actionis" className="td">
                                    <div className="text">
                                        <ul className="action-list">
                                            <li><a><i className="icon-play"></i></a></li>
                                            <li><a><i className="icon-stop"></i></a></li>
                                            <li><a><i className="icon-pencil"></i></a></li>
                                            <li><a><i className="icon-cross"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tr">
                                <div data-title="ID" className="td"><div className="text">1</div></div>
                                <div data-title="Site" className="td"><span className="text"><a className="site-link" href="https://cybersole.io">https://cybersole.io</a></span></div>
                                <div data-title="Keyword" className="td">
                                    <div className="text">
                                        <span className="tags-wrap">
                                            <span className="tag">+Restock</span>
                                        </span>
                                    </div>
                                </div>
                                <div data-title="Profile" className="td"><div className="text">Privacy 1</div></div>
                                <div data-title="Status" className="td"><div className="text"><span className="status">Waiting for link</span></div></div>
                                <div data-title="Actionis" className="td">
                                    <div className="text">
                                        <ul className="action-list">
                                            <li><a><i className="icon-play"></i></a></li>
                                            <li><a><i className="icon-stop"></i></a></li>
                                            <li><a><i className="icon-pencil"></i></a></li>
                                            <li><a><i className="icon-cross"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tr">
                                <div data-title="ID" className="td"><div className="text">1</div></div>
                                <div data-title="Site" className="td"><span className="text"><a className="site-link" href="https://cybersole.io">https://cybersole.io</a></span></div>
                                <div data-title="Keyword" className="td">
                                    <div className="text">
                                        <span className="tags-wrap">
                                            <span className="tag">+Restock</span>
                                            <span className="tag">+Live</span>
                                        </span>
                                    </div>
                                </div>
                                <div data-title="Profile" className="td"><div className="text">Privacy 1</div></div>
                                <div data-title="Status" className="td"><div className="text"><span className="status">Waiting for link</span></div></div>
                                <div data-title="Actionis" className="td">
                                    <div className="text">
                                        <ul className="action-list">
                                            <li><a><i className="icon-play"></i></a></li>
                                            <li><a><i className="icon-stop"></i></a></li>
                                            <li><a><i className="icon-pencil"></i></a></li>
                                            <li><a><i className="icon-cross"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tr">
                                <div data-title="ID" className="td"><div className="text">1</div></div>
                                <div data-title="Site" className="td"><span className="text"><a className="site-link" href="https://cybersole.io">https://cybersole.io</a></span></div>
                                <div data-title="Keyword" className="td">
                                    <div className="text">
                                        <span className="tags-wrap">
                                            <span className="tag">+Restock</span>
                                        </span>
                                    </div>
                                </div>
                                <div data-title="Profile" className="td"><div className="text">Privacy 1</div></div>
                                <div data-title="Status" className="td"><div className="text"><span className="status">Waiting for link</span></div></div>
                                <div data-title="Actionis" className="td">
                                    <div className="text">
                                        <ul className="action-list">
                                            <li><a><i className="icon-play"></i></a></li>
                                            <li><a><i className="icon-stop"></i></a></li>
                                            <li><a><i className="icon-pencil"></i></a></li>
                                            <li><a><i className="icon-cross"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scrollbars>
            </div>
        );
    }
}

export default DashboardContent;