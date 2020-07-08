import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/main.css';

class SettingContent extends Component {

    addToken = () => {
        this.props.addToken(true);
    }

    render() {
        return (
            <div className="dashboard-content">
                <div className="section-head">
                    <h1>Settings</h1>
                    <p><span className="text-white">8</span> Discord Tokens</p>
                </div>
                <div className="settings-columns">
                    <div className="setting-info">
                        <div className="setting-info-head">
                            <img src="images/img1.svg" width="424" height="189" alt="image description" />
                            <span className="version">V 0.0.1</span>
                            <div className="profile-img">
                                <a href="#"><img src="images/img2.png" width="122" height="122" alt="image description" /></a>
                            </div>
                        </div>
                        <ul className="info">
                            <li>
                                <strong className="title" >Need some help?</strong>
                                <p>Join our Discord server for more help and guides.</p>
                                <a className="btn btn-gradient"><i className="icon-discord"></i>Need some help?</a>
                            </li>
                            <li>
                                <strong className="title">Stay Updated</strong>
                                <p>Follow us on Twitter to stay up to date on out progress and succes!</p>
                                <a onClick={this.addToken} className="btn btn-gradient-blue tweets-opener"><i className="icon-twitter"></i>Need some help?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="setting-detail">
                        <form>
                            <div className="form-row-btn">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-wrap">
                                            <i className="icon icon-discord"></i>
                                            <input type="text" placeholder="Discord Webhook" />
                                        </div>
                                        <button className="btn btn-gradient" type="submit"><i className="icon-right-arrow"></i></button>
                                    </div>
                                </div>
                                <a href="#" className="btn small btn-success"><i className="icon-save"></i></a>
                            </div>
                            <h3>Auto Checkout</h3>
                            <div className="form-group">
                                <i className="icon icon-setting"></i>
                                <input type="text" placeholder="Discord Taken" />
                            </div>
                            <div className="form-row-btn">
                                <div className="form-group">
                                    <i className="icon icon-setting"></i>
                                    <input type="text" placeholder="Token Name" />
                                </div>
                                <a className="btn btn-primary" ><i className="icon-plus"></i>Add Token</a>
                            </div>
                        </form>
                        <Scrollbars style={{ height: 300 }}>
                            <div className="table-data token">
                                <div className="thead">
                                    <div className="tr">
                                        <div className="th">ID</div>
                                        <div className="th">Name</div>
                                        <div className="th">Token</div>
                                        <div className="th">Actions</div>
                                    </div>
                                </div>
                                <div className="tbody">
                                    <div className="tr">
                                        <div data-title="ID" className="td"><div className="text">1</div></div>
                                        <div data-title="Name" className="td"><div className="text">Bot 2</div></div>
                                        <div data-title="Token" className="td"><div className="text"><span className="key">9rtJq9.34tc9Hwy!qut09yEH209ryq39t209y3rWuyw4ytow</span></div></div>
                                        <div data-title="Actions" className="td">
                                            <div className="text">
                                                <ul className="action-list">
                                                    <li><a href="#"><i className="icon-pencil"></i></a></li>
                                                    <li><a href="#"><i className="icon-cross"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div data-title="ID" className="td"><div className="text">1</div></div>
                                        <div data-title="Name" className="td"><div className="text">Bot 2</div></div>
                                        <div data-title="Token" className="td"><div className="text"><span className="key">9rtJq9.34tc9Hwy!qut09yEH209ryq39t209y3rWuyw4ytow</span></div></div>
                                        <div data-title="Actions" className="td">
                                            <div className="text">
                                                <ul className="action-list">
                                                    <li><a href="#"><i className="icon-pencil"></i></a></li>
                                                    <li><a href="#"><i className="icon-cross"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div data-title="ID" className="td"><div className="text">1</div></div>
                                        <div data-title="Name" className="td"><div className="text">Bot 2</div></div>
                                        <div data-title="Token" className="td"><div className="text"><span className="key">9rtJq9.34tc9Hwy!qut09yEH209ryq39t209y3rWuyw4ytow</span></div></div>
                                        <div data-title="Actions" className="td">
                                            <div className="text">
                                                <ul className="action-list">
                                                    <li><a href="#"><i className="icon-pencil"></i></a></li>
                                                    <li><a href="#"><i className="icon-cross"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div data-title="ID" className="td"><div className="text">1</div></div>
                                        <div data-title="Name" className="td"><div className="text">Bot 2</div></div>
                                        <div data-title="Token" className="td"><div className="text"><span className="key">9rtJq9.34tc9Hwy!qut09yEH209ryq39t209y3rWuyw4ytow</span></div></div>
                                        <div data-title="Actions" className="td">
                                            <div className="text">
                                                <ul className="action-list">
                                                    <li><a href="#"><i className="icon-pencil"></i></a></li>
                                                    <li><a href="#"><i className="icon-cross"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div data-title="ID" className="td"><div className="text">1</div></div>
                                        <div data-title="Name" className="td"><div className="text">Bot 2</div></div>
                                        <div data-title="Token" className="td"><div className="text"><span className="key">9rtJq9.34tc9Hwy!qut09yEH209ryq39t209y3rWuyw4ytow</span></div></div>
                                        <div data-title="Actions" className="td">
                                            <div className="text">
                                                <ul className="action-list">
                                                    <li><a href="#"><i className="icon-pencil"></i></a></li>
                                                    <li><a href="#"><i className="icon-cross"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div data-title="ID" className="td"><div className="text">1</div></div>
                                        <div data-title="Name" className="td"><div className="text">Bot 2</div></div>
                                        <div data-title="Token" className="td"><div className="text"><span className="key">9rtJq9.34tc9Hwy!qut09yEH209ryq39t209y3rWuyw4ytow</span></div></div>
                                        <div data-title="Actions" className="td">
                                            <div className="text">
                                                <ul className="action-list">
                                                    <li><a href="#"><i className="icon-pencil"></i></a></li>
                                                    <li><a href="#"><i className="icon-cross"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tr">
                                        <div data-title="ID" className="td"><div className="text">1</div></div>
                                        <div data-title="Name" className="td"><div className="text">Bot 2</div></div>
                                        <div data-title="Token" className="td"><div className="text"><span className="key">9rtJq9.34tc9Hwy!qut09yEH209ryq39t209y3rWuyw4ytow</span></div></div>
                                        <div data-title="Actions" className="td">
                                            <div className="text">
                                                <ul className="action-list">
                                                    <li><a href="#"><i className="icon-pencil"></i></a></li>
                                                    <li><a href="#"><i className="icon-cross"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingContent;