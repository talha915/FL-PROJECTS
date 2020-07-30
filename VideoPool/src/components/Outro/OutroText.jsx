import React from 'react';

function OutroText() {
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
                    </form>
                </div>
            </div>
        </div>
    )
}
export default OutroText;