import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Main from '../Main';
import SignUp from '../Signup/Signup';
import Verify from '../Signup/Verify';
import Profile from '../Signup/Profile';
import Face from '../Signup/Face';
import Bank from '../Signup/Bank';
import ConnectBank from '../Signup/ConnectBank';
import CreateAccount from '../Signup/CreateAccount';
import Notification from '../Notifications/Notification';
import AddSession from '../Session/NewSession';
import SessionDetail from '../Session/SessionDetails';
import CancelledPolicy from '../Session/CancelPolicy';
import Ratings from '../Ratings/Ratings';
import Earnings from '../MyEarnings/Earnings';
import EarningDetails from '../MyEarnings/EarningDetails';
import Payouts from '../Payouts/Payouts';
import UserProfile from '../Profile/UserProfile';
import Contacts from '../Settings/Contacts';
import BankDetails from '../Settings/BankDetails';
import Terms from '../Settings/Terms';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route component={Main} path="/" exact />
                    <Route component={SignUp} path="/signup" exact/>
                    <Route component={Verify} path="/verify" exact/>
                    <Route component={Profile} path="/signup-profile" exact/>
                    <Route component={Face} path="/signup-face" exact/>
                    <Route component={Bank} path="/signup-bank" exact/>
                    <Route component={ConnectBank} path="/connect-bank" exact/>
                    <Route component={CreateAccount} path="/create-account" exact/>
                    <Route component={Notification} path="/notification" exact/>
                    <Route component={Notification} path="/home-past" exact/>
                    <Route component={AddSession} path="/add-new-session" exact/>
                    <Route component={AddSession} path="/edit-session" exact/>
                    <Route component={SessionDetail} path="/session-details" exact/>
                    <Route component={SessionDetail} path="/session-details-past" exact/>
                    <Route component={CancelledPolicy} path="/cancellation-policy" exact/>
                    <Route component={Ratings} path="/ratings" exact/>
                    <Route component={Ratings} path="/session-ratings" exact/>
                    <Route component={Earnings} path="/my-earnings" exact/>
                    <Route component={EarningDetails} path="/earning-details" exact/>
                    <Route component={Payouts} path="/payouts" exact/>
                    <Route component={UserProfile} path="/user-profile" exact/>
                    <Route component={UserProfile} path="/edit-user-profile" exact/>
                    <Route component={Contacts} path="/settings-contact" exact/>
                    <Route component={BankDetails} path="/settings-bank-details" exact/>
                    <Route component={Terms} path="/settings-terms-condition" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;