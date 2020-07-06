import React, { Component } from 'react';

import '../../styles/main.css';

class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closeTask: false
        }
    }

    closeTask=()=> {
        this.setState({closeTask: !this.state.closeTask});
        this.props.taskStatus(false);
    }

    render() {
        return (
            <div className={this.state.closeTask ? "" : "popup-task-active"}>
                <div className="popup popup-task">
                    <div className="popup-frame">
                        <div className="pupup-content">
                            <div className="pupup-head">
                                <div className="heading">
                                    <span className="icon-wrap">
                                        <i className="icon-plus"></i>
                                    </span>
                                    <h2>Create Task</h2>
                                </div>
                                <a className="close-task-popup" onClick={this.closeTask}><span className="circle"></span></a>
                            </div>
                            <div className="popup-body">
                                <form>
                                    <div className="form-row three-column">
                                        <div className="form-group">
                                            <i className="icon icon-discord"></i>
                                            <input type="text" placeholder="Channel ID" />
                                        </div>
                                        <div className="form-group">
                                            <i className="icon icon-world"></i>
                                            <input type="text" placeholder="Keyword" />
                                        </div>
                                        <div className="form-group">
                                            <i className="icon icon-setting"></i>
                                            <div className="custom-select">
                                                <select>
                                                    <option>Discord Token</option>
                                                    <option>Discord Token 2</option>
                                                    <option>Discord Token 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="checkbox-list">
                                        <li>
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <span className="custom-lable">Copy Password</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <span className="custom-lable">Auto-Open</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <span className="custom-lable">Autofill</span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div className="checkout-box">
                                        <label className="custom-checkbox">
                                            <input type="checkbox" />
                                            <span className="custom-lable">Auto Checkout</span>
                                        </label>
                                        <div className="checkout-filed active">
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-dash"></i>
                                                    <div className="custom-select">
                                                        <select>
                                                            <option>Dashboard Type</option>
                                                            <option>Dashboard Type 2</option>
                                                            <option>Dashboard Type 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <i className="icon icon-url"></i>
                                                    <input type="text" placeholder="Site URL" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-user"></i>
                                                    <div className="custom-select">
                                                        <select>
                                                            <option>Select Profile</option>
                                                            <option>Profile 1</option>
                                                            <option>Profile 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <i className="icon icon-pencil"></i>
                                                    <input type="text" placeholder="Task Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popup-tfoot">
                                        <a href="#" className="btn btn-primary"><i className="icon-plus"></i>Create Task</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateTask;