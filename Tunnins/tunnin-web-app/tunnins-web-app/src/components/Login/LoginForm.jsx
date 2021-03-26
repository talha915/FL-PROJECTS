import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import ModalPopup from './ModalPopup';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateModal } from '../../actions/updateModal';
import { postFetch } from '../../actions/postFetch';

// Constants
import { get_auth, notification_route } from '../../constants/constants';

// Router
import { withRouter } from 'react-router-dom';

// Style
import '../../styles/login.scss';

function LoginForm(props) {

    const [loginForm, setForm] = useState({});
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        setFormData();
    }, []);


    const setFormData=()=> {
        setForm(props.formData);
    }

    const [modal, setModal] = useState(false);

    const [datacall, setDataCall] = useState({});

    const dispatch = useDispatch();

    const toggle = () => {
        setModal(!modal);
        dispatch(updateModal('forgot'));
    }

    const modalState = useSelector(state => state.updateModal);


    const getDataFromChild = (val) => {
        callAgain(val);
    }

    const callAgain = (data) => {
        setDataCall(data);
    }

    const routeSignUp=()=> {
        props.history.push('/signup');
    }

    const getFormData = () => {
        if (Object.keys(loginForm).length > 0) {
            return (
                <div className="login-form">
                    <h2 className="login-form-heading">
                        {loginForm.welcomeText}
                    </h2>
                    <p className="login-form-note">
                        {loginForm.loginNote}
                    </p>
                    <Form >
                        <FormGroup className="custom-input-wrapper">
                            <Label for="exampleEmail">{loginForm.email}</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="dodgeui2020@gmail.com" onChange={(e)=>handleChange('username', e.target.value)}/>
                            <span className="input-icons"><i className="icon-mail"></i></span>
                        </FormGroup>
                        <FormGroup className="custom-input-wrapper">
                            <Label for="examplePassword">{loginForm.password}</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="***************" onChange={(e)=>handleChange('password', e.target.value)} />
                            <span className="input-icons"><i className="icon-lock-unlock"></i></span>
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-between align-items-center mb-5" check >
                            <Label className="tunnin-checkbox" check>
                                <Input type="checkbox" /> {loginForm.remember}
                            </Label>
                            <Label check>
                                <a className="tunnin-link" href="#" onClick={toggle}>{loginForm.forgot}</a>
                            </Label>
                        </FormGroup>
                        <FormGroup className="text-center">
                            <Button color="primary" size="lg" onClick={()=>userLogin()}>{loginForm.loginBtn}</Button>
                            <p className="text-grey mt-3">Don’t have an account? <a className="tunnin-link" onClick={routeSignUp}>SIGNUP</a></p>
                        </FormGroup>
                    </Form>
                    <ModalPopup isOpen={modal} loginData={modalState} sendData={getDataFromChild} />
                </div>
            )
        }
    }

    let form = {};

    const handleChange=(field, data)=> {
        form[field] = data;
    }

    const userLogin=()=> {
        if(Object.keys(form).length == 2) {
            dispatch(postFetch(get_auth, form));
        }    
    }

    const userInfo = useSelector(state => state.postFetch);
    
    if(userInfo.hasOwnProperty('userLogged')) {
        props.history.push(notification_route);
    }

    return (
        <div>
            {getFormData()}
        </div>
    )
}

export default withRouter(LoginForm);