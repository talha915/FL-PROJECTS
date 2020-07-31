import React, { Component } from 'react';

class Settings extends Component {
    render() {
        return (
            <div class="tab-pane fade show active" id="setting">
                <div class="inner-tabs-holder w-100">
                    <div class="scroll-area">
                        <form class="settings-form">
                            <div class="form-group">
                                <label htmlFor="pass">Password</label>
                                <div class="inpupt-wrap">
                                    <input class="form-control" type="password" id="pass" placeholder="Enter your password" />
                                    <i class="icon icon-preview"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label htmlFor="date">Start Date</label>
                                <div class="inpupt-wrap">
                                    <input class="form-control" type="text" id="date" placeholder="DD/MM/YYYY" />
                                    <i class="icon icon-calendar"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <span class="label">Do you want the recipient to see the poll result?</span>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                    <label class="custom-control-label" htmlFor="customCheck1">No</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                    <label class="custom-control-label" htmlFor="customCheck2">Yes, show result during voting?</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                    <label class="custom-control-label" htmlFor="customCheck3">Yes, show result after voting?</label>
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