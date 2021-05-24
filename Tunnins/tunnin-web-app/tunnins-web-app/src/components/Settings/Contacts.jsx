import React, { useState, useEffect } from 'react';
import {
    Button, Row, Col
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settings } from '../../actions/settings';
import { getFetch } from '../../actions/getFetch';
import { postFetch } from '../../actions/postFetch';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_contact, pages, user_contact_support } from '../../constants/constants';

// Styles
import '../../styles/settings.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Contacts(props) {

    const [userQuery, setUserQuery] = useState('');

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.postFetch);

    useEffect(() => {
        dispatchContact();
        dispatchPages();
    }, []);

    const dispatchPages=()=> {
        dispatch(getFetch(pages));
    }

    const dispatchContact = () => {
        dispatch(settings(setting_contact));
    }

    const getSettings = useSelector(state => state.settings);

    const getContacts = () => {
        if (getSettings.hasOwnProperty('contact')) {
            let contacts = getSettings.contact;
            return (
                <div className="contacts">
                   <div className="settings-container">
                        <h5 className="settings-heading">
                            <i className="icon-avatar"></i>
                            {contacts.title}
                        </h5>
                        <textarea className="contact-admin-textarea" name="contact" id="contactAdmin" cols="30" rows="10" placeholder={contacts.description} onChange={(e)=>handleChange(e.target.value)}></textarea>
                        <div className="text-center">
                            <Button color="primary" className="action-btn" onClick={()=>sendQuery()}>
                                {contacts.btn}
                            </Button>
                        </div>
                   </div>
                </div>
            );
        }
    }

    const handleChange=(data)=> {
        setUserQuery(data);
    }

    const sendQuery=()=> {
        console.log("Query: ", userQuery);
        if(userDetails.hasOwnProperty('userLogged')) {
            let obj = {
                "name" : userDetails.userLogged.fullName,
                "title" : "Query",
                "query" : userQuery,
                "email" : userDetails.userLogged.email,
                "userId" : userDetails.userLogged._id
            }
            console.log("Obj: ", obj);
            dispatch(postFetch(user_contact_support,obj));
        }
    }

    const getSettingSidebar = () => {
        return (
            <SettingSidebar />
        );
    }

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col>
                        <Row className="h-100">
                            <Col className="p-0 settings-sidebar-wrapper">
                                {getSettingSidebar()}
                            </Col>
                            <Col sm="9">
                                {getContacts()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Contacts);