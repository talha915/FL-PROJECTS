import React, { Component } from 'react';

// Components
import Login from './Login';

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
        // ReduxAction
        this.props.getLocal();
    }

    setData = () => {
        this.setState({ data: Data });
    }

    getData = () => {
        if (this.state.data) {
            let data = this.state.data;
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
        localData: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getLocal: bindActionCreators(getLocal, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);