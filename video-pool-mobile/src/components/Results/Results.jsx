import React, { Component } from 'react';

/* Data */
import ResultsData from '../../Data/Results.json';

/* Router */
import { withRouter } from 'react-router-dom';

/* Components */
import Accordion from './Accordion';

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultsList: ''
        }
    }

    componentDidMount() {
        this.setResults();
    }

    setResults = () => {
        this.setState({ resultsList: ResultsData.resultList });
    }

    getResults = () => {
        if (this.state.resultsList) {
            let results = this.state.resultsList.map((data, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active" : index === 3 ? "nav-link analytics" : "nav-link"} data-toggle="pill" href="#result-vote1" role="tab" aria-selected="true" onClick={() => { this.resultClick(data, index) }}>
                            <span className="align">
                                <i className="icon icon-vote"></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            })
            return results;
        }
    }

    resultClick = (data, index) => {
        this.props.history.push(data.redirect);
        let activeStates = [...this.state.resultsList];
        for (let i = 0; i < activeStates.length; i++) {
            if (activeStates[i].activeStatus === true) {
                activeStates[i].activeStatus = false;
            }
        }
        data.activeStatus = true;
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="results">
                <div className="d-flex flex-wrap w-100">
                    <div className="inner-tab-container order-2">
                        <div className="inner-tabs-wrap">
                            <ul className="nav inner-tabs nav-pills" role="tablist">
                                {this.getResults()}
                            </ul>
                            <div className="inner-tabs-content tab-content">
                                {window.location.pathname === "/results/analytics" ?
                                    <div className="tab-pane fade show active" id="analytics">
                                        <div className="inner-tabs-holder w-100">
                                            <div className="scroll-area">
                                                <div className="graph-wrap">
                                                    <img src="/images/graph.jpg" width="640" height="510" alt="graph" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="tab-pane fade show active">
                                        <div className="inner-tabs-holder w-100">
                                            <div className="scroll-area">
                                                <Accordion />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Results);