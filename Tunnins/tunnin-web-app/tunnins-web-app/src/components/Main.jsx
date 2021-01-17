import React, { Component } from 'react';

// Components
import Login from './Login/Login';

// Redux
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// Redux Action
import { getLocal } from '../actions/fetchLocalData';

// Data
import Data from '../Data/Data.json';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        this.setData();
    }

    setData = () => {
        this.props.getLocal();
    }

    getData = () => {
        if (Object.keys(this.props.localData.dataState).length > 0) {
            let data = this.props.localData;
            return (
                <Login loginDetails={data} />
            )
        }
    }

    render() {
        return (
            <div>
                {this.getData()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        localData: state.localData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getLocal: bindActionCreators(getLocal, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);