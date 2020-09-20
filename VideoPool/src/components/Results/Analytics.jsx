import React, { Component } from 'react';

class Analytics extends Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="analytics">
                <div className="inner-tabs-holder w-100">
                    <div className="scroll-area sm-scroll">
                        <div className="graph-wrap">
                            <img src="/images/graph.jpg" width="640" height="510" alt="graph" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Analytics;