import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card
} from 'reactstrap';

import TimePicker from 'react-time-picker';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';
import { addSession } from '../../actions/addSession';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { add_session, add_session_modal } from '../../constants/constants';

// Styles
import '../../styles/newsession.scss';

// Components
import Sidebar from '../Sidebar/Sidebar';
import Popup from './Popup';

function AddSession() {

    const dispatch = useDispatch();
    const [value, onChange] = useState('10:00');

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
                <Row>
                    <Col sm="6">
                        <h6 className="title">
                            {newSession.data.title}
                        </h6>
                    </Col>
                    <Col sm="6">
                        <Button className="addBtn" onClick={()=>dispatchAction()}>
                            {newSession.data.btnTitle}
                        </Button>
                    </Col>
                </Row>
            );
        }
    }

    const dispatchAction=()=> {
        dispatch(sessionModal(add_session_modal));
    }

    const popup = useSelector(state => state.sessionModal);

    const getImages = () => {
        if (newSession.hasOwnProperty('data')) {
            return (
                <Row>
                    <Row>
                        <p className="upload-title">
                            {newSession.data.upload}
                        </p>
                    </Row>
                    <Row>
                        {getuploads()}
                    </Row>
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
                            {data.icon}
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
                                <select className="form-control">
                                    {getOptions(data.options)}
                                </select>
                                : 
                                data.type == "time" ?                       
                                    <TimePicker
                                        onChange={onChange}
                                        value={value}
                                        className="form-control"
                                    />     
                                :
                                <Input placeholder={data.placeholder} type={data.type} />
                            }                  
                        </FormGroup>
                    </Col>
                );
            });
            return formList;
        }
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
                <Row>
                    <Col sm="2" className="left-container">
                        <Sidebar />
                    </Col>
                    <Col sm="10">
                        {getSessionTop()}
                        {getImages()}
                        <Form className="form">
                            <Row>
                                {getForm()}
                            </Row>
                        </Form>
                    </Col>
                </Row>
            } 
        </div>
    )
}

export default withRouter(AddSession);