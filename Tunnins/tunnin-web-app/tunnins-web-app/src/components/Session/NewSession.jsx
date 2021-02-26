import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card
} from 'reactstrap';


// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';
import { addSession } from '../../actions/addSession';
import { addedSession } from '../../actions/addedSession';
// Router
import { withRouter } from 'react-router-dom';

// Constants
import { add_session, add_session_modal } from '../../constants/constants';

// Styles
import '../../styles/newsession.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Popup from './Popup';

function AddSession(props) {

    let sessionForm = {};

    console.log("LOcation: ", props.history.location.pathname);

    const dispatch = useDispatch();
    const [form, setform] = useState({});
    const [editForm, setEditForm] = useState({});

    const newSession = useSelector(state => state.addSession);

    const editSession = useSelector(state => state.addedSession);


    useEffect(() => {
        dispatchNewSession();
        dispatchEditSession();
    }, []);


    const dispatchNewSession = () => {
        dispatch(addSession(add_session));
    }

    const dispatchEditSession=()=> {
        if(Object.keys(editSession).length > 0) {
            setEditForm(editSession.addedNewSession);
            console.log("Edit Session: ", editSession);
        }
    }

    const getSessionTop = () => {
        if (newSession.hasOwnProperty('data')) {
            return (
                <Row className="mb-3">
                    <Col className="d-flex align-items-center col-sm-6">
                        <h6 className="title m-0">
                            <i className="icon-chevron-left"></i>
                            {editSession.hasOwnProperty('editSession') ? editSession.editSession.title : newSession.data.title}
                        </h6>
                    </Col>
                    <Col className="add-btn-wrapper col-sm-6">
                        <Button className="addBtn" onClick={()=>dispatchAction()}>
                            {editSession.hasOwnProperty('editSession') ? editSession.editSession.btnTitle : newSession.data.btnTitle}
                        </Button>
                    </Col>
                </Row>
            );
        }
    }

    const dispatchAction=()=> {
        dispatch(addedSession(sessionForm));   
        if(props.history.location.pathname === "/edit-session") {
            props.history.push('/home-past');
        }
        else {
            dispatch(sessionModal(add_session_modal));
        }
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
                            {/* <i className="icon-cloud"></i> */}
                            <span className="delete-img-wrapper">
                            <i className="icon-delete"></i>
                            </span>
                            
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
                                <select className="form-control" name={data.name} defaultValue={editSession.addedNewSession[data.name]} onChange={(e)=>{getNewSession(data.name, e.target.value)}} >
                                    {getOptions(data.options)}
                                </select>                  
                                :
                                <Input placeholder={data.placeholder} type={data.type} name={data.name} defaultValue={editSession.addedNewSession[data.name]} onChange={(e)=>{getNewSession(data.name, e.target.value)}} />
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
                    <Header />
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