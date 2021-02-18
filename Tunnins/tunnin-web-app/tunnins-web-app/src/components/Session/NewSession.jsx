import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card
} from 'reactstrap';


// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';
import { addSession } from '../../actions/addSession';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { add_session, add_session_modal, added_session } from '../../constants/constants';

// Styles
import '../../styles/newsession.scss';

// Components
import Sidebar from '../Sidebar/Sidebar';
import Popup from './Popup';
import dp from '../../images/dp.png';

function AddSession() {

    let sessionForm = {};

    const dispatch = useDispatch();
    const [form, setform] = useState({});

    const newSession = useSelector(state => state.addSession);

    useEffect(() => {
        dispatchNewSession();
    }, []);


    const dispatchNewSession = () => {
        dispatch(addSession(add_session));
    }

    const getSessionTop = () => {
        if (newSession.hasOwnProperty('data')) {
            return (
                <Row className="mb-3">
                    <Col className="d-flex align-items-center col-sm-6">
                        <h6 className="title m-0">
                            <i className="icon-chevron-left"></i>
                            {newSession.data.title}
                        </h6>
                    </Col>
                    <Col className="add-btn-wrapper col-sm-6">
                        <Button className="addBtn" onClick={()=>dispatchAction()}>
                            {newSession.data.btnTitle}
                        </Button>
                    </Col>
                </Row>
            );
        }
    }

    const dispatchAction=()=> {
        dispatch(addSession(added_session, sessionForm));
        dispatch(sessionModal(add_session_modal));
    }

    const popup = useSelector(state => state.sessionModal);

    const getImages = () => {
        if (newSession.hasOwnProperty('data')) {
            return (
                <Row>
                    <Col sm="12">
                        <p className="upload-title">
                            {newSession.data.upload}
                        </p>
                    </Col>
                    <Col sm="8">
                        <Row>
                            {getuploads()}
                        </Row>
                    </Col>
                </Row>
            )
        }
    }

    const getuploads=()=> {
        if (newSession.hasOwnProperty('data')) {
            let cards = newSession.data.cardList;
            let cardList = cards.map((data, index)=> {
                return(
                    <Col sm="3" key={index}>
                        <Card className="uploads">
                            <div className="d-none">
                                {data.icon}
                            </div>
                            <i className="icon-cloud"></i>
                        </Card>
                    </Col>
                );
            });
            return cardList;
        }
    }

    const getForm=()=> {
        if (newSession.hasOwnProperty('data')) {
            let form = newSession.data.sessionForm;
            let formList = form.map((data, index)=> {
                return(
                    <Col key={index} sm={data.size}>
                        <FormGroup>
                            <Label className={data.title !="" ? "form-title": "form-empty-title"}>
                                {data.title}
                            </Label>
                            {data.type == "select" ?
                                <select className="form-control" name={data.name} onChange={(e)=>{getNewSession(data.name, e.target.value)}} >
                                    {getOptions(data.options)}
                                </select>                  
                                :
                                <Input placeholder={data.placeholder} type={data.type} name={data.name} onChange={(e)=>{getNewSession(data.name, e.target.value)}} />
                            }                  
                        </FormGroup>
                    </Col>
                );
            });
            return formList;
        }
    }

    const getNewSession=(key, value)=> {
        sessionForm[key] = value;
    }

    const getOptions=(data)=> {
        let options = data.map((data, index)=> {
            return(
                <option value={data.value} key={index}>
                    {data.title}
                </option>
            );
        });
        return options;
    }


    return (
        <div className="new-session">
            {popup.popUp ?            
                <Popup modalState={popup} action_type={add_session_modal} />
                :
                <div>
                    <div className="profile-actions d-flex align-items-center justify-content-end">
                        <div className="user-notification-wrapper">
                            <span className="icon-Group-22380">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                            </span>
                        </div>
                        <div className="user-profile">
                            <span className="dp-wrapper">
                            <img src={dp} alt="user-dp" />
                            </span>
                            <span className="credentials">
                                <span className="name">
                                    Sanjay Singh
                                </span>
                                <span className="email">
                                    sanjay.singh@gmail.com
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <Row>
                            <Col className="left-container">
                                <Sidebar />
                            </Col>
                            <Col  className="mt-3">
                                <div className="add-session-right-container">
                                    {getSessionTop()}
                                    {getImages()}
                                    <Form className="tunnin-form mt-5">
                                        <Row>
                                            {getForm()}
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            } 
        </div>
    )
}

export default withRouter(AddSession);