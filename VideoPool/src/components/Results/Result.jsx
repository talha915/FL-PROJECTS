import React, { Component } from 'react';

/* Data */
import ResultsData from '../../Data/Results.json';

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
                        <a className={data.activeStatus ? "nav-link active" : "nav-link"} data-toggle="pill" href="#result-vote1" role="tab" aria-selected="true">
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
                                <div className="tab-pane fade show active" id="result-vote1">
                                    <div className="inner-tabs-holder w-100">
                                        <div className="scroll-area">
                                            <div className="accordion" id="accordion01">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse01" aria-expanded="false" aria-controls="collapse01">
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse01" className="collapse" data-parent="#accordion01">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse02" aria-expanded="false">
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse02" className="collapse" data-parent="#accordion01">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse03" aria-expanded="false">
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapse03" className="collapse" data-parent="#accordion01">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="result-vote2">
                                    <div className="inner-tabs-holder w-100">
                                        <div className="scroll-area sm-scroll">
                                            <div className="accordion" id="accordion02">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseB01" aria-expanded="false">
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseB01" className="collapse" data-parent="#accordion02">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseB02" aria-expanded="false" >
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseB02" className="collapse" data-parent="#accordion02">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseB03" aria-expanded="false" >
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseB03" className="collapse" data-parent="#accordion02">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="result-vote3">
                                    <div className="inner-tabs-holder w-100">
                                        <div className="scroll-area sm-scroll">
                                            <div className="accordion" id="accordion03">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseC01" aria-expanded="false">
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseC01" className="collapse" data-parent="#accordionC03">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseC02" aria-expanded="false">
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseC02" className="collapse" data-parent="#accordion01">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h2 className="mb-0">
                                                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseC03" aria-expanded="false">
                                                                What is Lorem Ipsum? <i className="icon-arrow-long-right"></i>
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseC03" className="collapse" data-parent="#accordion03">
                                                        <div className="card-body">
                                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="analytics">
                                    <div className="inner-tabs-holder w-100">
                                        <div className="scroll-area sm-scroll">
                                            <div className="graph-wrap">
                                                <img src="/images/graph.jpg" width="640" height="510" alt="graph" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
export default Result;