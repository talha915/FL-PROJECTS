import React, { Component } from 'react';

// Components
import Login from './Login';

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
export default Main;