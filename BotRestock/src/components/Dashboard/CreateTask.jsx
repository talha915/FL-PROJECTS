import React, { Component } from 'react';
import Select from 'react-select';
import '../../styles/main.css';

class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closeTask: false,
            autoCheck: false,
            values: ''
        }
    }

    closeTask=()=> {
        this.setState({closeTask: !this.state.closeTask});
        this.props.taskStatus(false);
    }

    checkout=()=> {
        this.setState({autoCheck: !this.state.autoCheck});
    }

    dummyOptions = [
        { label: "Option1", value: 1 },
        { label: "Option2", value: 2 },
        { label: "Option3", value: 3 },
        { label: "Option4", value: 4 },
        { label: "Option5", value: 5 },
        { label: "Option6", value: 6 },
    ];

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
                                                {/* <select>
                                                    <option>Discord Token</option>
                                                    <option>Discord Token 2</option>
                                                    <option>Discord Token 3</option>
                                                </select> */}
                                                <Select options={ this.dummyOptions } />
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="checkbox-list">
                                        <li>
                                            <label className="custom-checkbox">
                                                <input type="checkbox" checked />
                                                <span className="checkbox"></span>
                                                <span className="custom-lable"><em>Copy Password</em></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <span className="checkbox"></span>
                                                <span className="custom-lable"><em>Auto-Open</em></span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <span className="checkbox"></span>
                                                <span className="custom-lable"><em>Autofill</em></span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div className="checkout-box" >
                                        <label className="custom-checkbox" >
                                            <input type="checkbox" />
                                            <span className="checkbox no-bg" onClick={this.checkout}></span>
                                            <span className="custom-lable" onClick={this.checkout}><em>Auto Checkout</em></span>
                                        </label>
                                        {this.state.autoCheck && this.state.autoCheck ?
                                        <div className="checkout-filed active">
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <i className="icon icon-dash"></i>
                                                    <div className="custom-select">
                                                        {/* <select>
                                                            <option>Dashboard Type</option>
                                                            <option>Dashboard Type 2</option>
                                                            <option>Dashboard Type 3</option>
                                                        </select> */}
                                                        <Select options={ this.dummyOptions } />
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
                                                        {/* <select>
                                                            <option>Select Profile</option>
                                                            <option>Profile 1</option>
                                                            <option>Profile 2</option>
                                                        </select> */}
                                                        <Select options={ this.dummyOptions } />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <i className="icon icon-pencil"></i>
                                                    <input type="text" placeholder="Task Name" />
                                                </div>
                                            </div>
                                        </div>
                                        : ''}
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