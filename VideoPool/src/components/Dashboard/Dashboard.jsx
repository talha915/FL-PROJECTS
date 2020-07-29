import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DashboardContent from './DashboardContent';
import CreateTask from './CreateTask';
import CreateProfile from './CreateProfile';

import '../../styles/main.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createdTask: false,
            createdProfile: false
        }
    }

    createdTask = (props) => {
        this.setState({ createdTask: props });
    }

    taskStatus=(props)=> {
        this.setState({createdTask: props});
    }

    createProfile=(props)=> {
        this.setState({ createdProfile: props });
    }

    profileStatus=(props)=> {
        this.setState({ createdProfile: props });
    }

    render() {
        
        return (
            <div>
                <div id="page">
                    <main className="dashboard-wrap">
                        <Sidebar />
                        <DashboardContent createTask={this.createdTask} createProfile={this.createProfile}/>
                    </main>
                </div>

                {
                    this.state.createdTask && this.state.createdTask ?
                        <CreateTask taskStatus={this.taskStatus}/>
                    : 
                        ''
                }

                {
                    this.state.createdProfile && this.state.createdProfile ?
                        <CreateProfile closeProfile={this.profileStatus} />
                    :
                        ''
                }
            </div>


        )
    }
}

export default Dashboard;