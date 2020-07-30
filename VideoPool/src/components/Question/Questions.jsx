import React, { Component } from 'react';

/* Data */
import questionData from '../../Data/Questions.json';

/* Router */
import { withRouter } from 'react-router-dom';

const Vote = () => {
    return (
        <div className="tab-pane fade show active">
            <div className="inner-tabs-holder w-100">
                <div className="scroll-area sm-scroll">
                    <form>
                        <div className="vote-box">
                            <h3>Question:</h3>
                            <textarea placeholder="Ask a question...." className="form-control pl-0 sm border-0"></textarea>
                            <a href="#" className="vote-box-link">+ Add an alternative</a>
                        </div>
                        <a href="#" className="btn rounded-btn round btn-warning btn-sm"><i className="icon-stettings-ouline"></i> Settings</a>
                    </form>
                </div>
                <div className="btn-wrap text-center">
                    <a href="#" className="btn rounded-btn btn-warning btn-sm"><i className="icon-plus"></i> Create Vote</a>
                </div>
            </div>
        </div>
    )
}

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionList: ''
        }
    }

    componentDidMount() {
        this.setQuestions();
    }

    setQuestions = () => {
        this.setState({ questionList: questionData })
    }

    getQuestions = () => {
        if (this.state.questionList) {
            let listData = this.state.questionList.questions.map((data, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <a className={data.activeStatus ? "nav-link active" : "nav-link"} data-toggle="pill" href="#" role="tab" aria-selected="true" onClick={() => this.clickQuest(data, index)}>
                            <span className="align">
                                <i className="icon icon-vote d-lg-none"></i>
                                <span className="text d-block">
                                    {data.name}
                                </span>
                            </span>
                        </a>
                    </li>
                )
            })
            return listData;
        }
    }

    clickQuest = (data, index) => {
        this.props.history.push(data.redirect);
        let prevQues = [...this.state.questionList.questions];
        for(let i=0; i<prevQues.length; i++) {
            if(prevQues[i].activeStatus === true) {
                prevQues[i].activeStatus = false;
            }
        }
        data.activeStatus = true;
    }



    render() {
        return (
            <div className="tab-pane fade show active" id="question">
                <div className="d-flex flex-wrap flex-lg-nowrap w-100">
                    <div className="inner-tab-container order-2 order-lg-1">
                        <div className="inner-tabs-wrap">
                            <ul className="nav inner-tabs nav-pills" role="tablist">
                                {this.getQuestions()}
                            </ul>
                            <div className="inner-tabs-content tab-content">
                                {window.location.pathname === "/question/addvote"
                                    ? ''
                                    : <Vote />
                                }

                            </div>
                        </div>
                    </div>
                    <div className="video-box order-1 order-lg-2 text-center">
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
export default withRouter(Questions);