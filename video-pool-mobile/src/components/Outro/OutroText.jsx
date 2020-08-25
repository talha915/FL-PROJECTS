import React, { Component } from 'react';

class OutroText extends Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="text">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area sm-scroll">
                        <form>
                            <div className="form-group mb-60">
                                <textarea className="form-control" placeholder="Type here ......"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-submit btn-warning btn-sm rounded-btn">Submit</button>
                            </div>
                            <div className="thank-you-message">
                                <div className="align">
                                    <p>Thank you for answering</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default OutroText;