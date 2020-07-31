import React, { Component } from 'react';

/* Data */
import ResultsData from '../../Data/Results.json';

/* Router */
import { withRouter } from 'react-router-dom';

/* Components */
import Accordion from './Accordion';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultsList: ''
        }
    }

    componentDidMount() {
        this.setResults();
    }

    setResults=()=> {
        this.setState({resultsList: ResultsData.resultList});
    }

    getResults=()=> {
        if(this.state.resultsList) {
            let results = this.state.resultsList.map((data, index)=> {
                return(
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active" : index === 3 ? "nav-link analytics": "nav-link"} data-toggle="pill" href="#result-vote1" role="tab" aria-selected="true" onClick={()=>{this.resultClick(data, index)}}>
                            <span className="align">
                                <i className="icon icon-vote d-lg-none"></i>
                                <span className="text d-block">{data.name}</span>
                            </span>
                        </a>
                    </li>
                )
            })
            return results;
        }
    }

    resultClick=(data, index)=> {
        this.props.history.push(data.redirect);
        let activeStates = [...this.state.resultsList];
        for(let i=0; i<activeStates.length; i++) {
            if(activeStates[i].activeStatus === true) {
                activeStates[i].activeStatus = false;
            }
        }
        data.activeStatus = true;
    }

    render() {
        return (
            <div className="tab-pane fade show active" id="results">
                <div className="d-flex flex-wrap flex-lg-nowrap w-100">
                    <div className="inner-tab-container order-2 order-lg-1">
                        <div className="inner-tabs-wrap">
                            <ul className="nav inner-tabs nav-pills" role="tablist">
                                {this.getResults()}
                            </ul>
                            <div className="inner-tabs-content tab-content">
                                {window.location.pathname === "/results/analytics" ?
                                    <div className="tab-pane fade show active" id="analytics">
                                        <div className="inner-tabs-holder w-100">
                                            <div className="scroll-area sm-scroll">
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
                    <div className="video-box d-none d-lg-block order-1 order-lg-2 text-center">
                        <a href="#" className="btn-paly"><img src="/images/play.png" width="76" height="76" alt="play button" /></a>
                        <div className="d-none d-lg-block">
                            <img src="/images/frame-video-desktop.png" className="img-fluid" width="364" height="718" alt="image description" />
                        </div>
                        <div className="d-lg-none">
                            <img src="/images/frame-video-mobile.png" className="img-fluid" width="394" height="218" alt="image description" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Result);