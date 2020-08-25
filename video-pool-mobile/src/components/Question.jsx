import React, { Component } from 'react';

import Questions from './Question/Questions';
import Header from './Header';

import questionData from '../Data/Questions.json';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: 0
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


    render() {
        return (
            <div id="page">
                <div className="dashboard-page">
                    <Header routeProps={this.state.routes}/>
                    <Questions />
                </div>
            </div>
        )
    }
}

export default Question;