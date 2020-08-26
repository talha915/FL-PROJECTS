import React, { Component } from 'react';

class Exports extends Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="export">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area">
                        <div className="exports-btns-wrap">
                            <div className="hold">
                                <a href="#" className="btn btn-warning btn-sm rounded-btn"><i className="icon-share"></i> Share result</a>
                                <a href="#" className="btn btn-warning btn-sm rounded-btn"><i className="icon-upload"></i> Export result</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exports;