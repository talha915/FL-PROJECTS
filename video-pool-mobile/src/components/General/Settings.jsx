import React, { Component } from 'react';

class Settings extends Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="setting">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area">
                        <form className="settings-form">
                            <div className="form-group">
                                <label htmlFor="pass">Password</label>
                                <div className="inpupt-wrap">
                                    <input className="form-control" type="password" id="pass" placeholder="Enter your password" />
                                    <i className="icon icon-preview"></i>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Start Date</label>
                                <div className="inpupt-wrap">
                                    <input className="form-control" type="text" id="date" placeholder="DD/MM/YYYY" />
                                    <i className="icon icon-calendar"></i>
                                </div>
                            </div>
                            <div className="form-group">
                                <span className="label">Do you want the recipient to see the poll result?</span>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">No</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                    <label className="custom-control-label" htmlFor="customCheck2">Yes, show result during voting?</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                    <label className="custom-control-label" htmlFor="customCheck3">Yes, show result after voting?</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Settings;