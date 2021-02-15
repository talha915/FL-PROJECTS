import React from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import verify from '../../images/verify-email.png';
// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateModal } from '../../actions/updateModal';

// Router
import { withRouter } from 'react-router-dom';

// Style
import '../../styles/login.scss';


function ModalPopup(props) {

    const dispatch = useDispatch();

    const updateData = () => {
        dispatch(updateModal('reset'));
    }

    const modalState = useSelector(state => state.updateModal);

    const closeModal=()=> {
        dispatch(updateModal('close'));
        props.history.push('/create-account');
    }

    

    const handleChange=(data)=> {
        props.sendData(data);
    }

    const getModal = () => {
        if (Object.keys(props.loginData).length > 0) {
            let data = props.loginData.modalState;
            if(props.loginData.popUp == false) {
                //props.onChange(props.loginData);
                handleChange(props.loginData);
            }
            return (
                <Modal className="forgot-password-popup modal-dialog-centered" isOpen={props.loginData.popUp} onChange={handleChange}>
                    {data.hasOwnProperty('text') ?
                    <div className="text-center">
                        <img src={verify} alt="Reset Password" />
                    </div>
                    :
                    <div></div>
                    }
                    <ModalHeader className="border-0 justify-content-center pb-0" >{data.heading}</ModalHeader>
                    <ModalBody className="pt-1">
                        <Form>
                            {data.hasOwnProperty('text') ?
                                <FormGroup>
                                    <p className="text-center verify-text">
                                        {data.text}
                                    </p>
                                </FormGroup>
                                :
                                <FormGroup className="custom-input-wrapper">
                                    <p className="text-center mb-5">Please enter your email address</p>
                                    <Label for="exampleEmail">{data.email}</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="dodgeui2020@gmail.com" />
                                    <span className="input-icons"><i className="icon-mail"></i></span>
                                </FormGroup>

                            }
                        </Form>
                    </ModalBody>
                    <ModalFooter className="border-0 justify-content-center">
                        {data.hasOwnProperty('text') ?
                            <Button color="primary" onClick={() => closeModal()}>Ok</Button>
                            :
                            <Button color="primary" onClick={() => updateData()}>Send</Button>
                        }
                    </ModalFooter>
                </Modal>
            )
        }
    }

    return (
        <div>
            {getModal()}
        </div>
    )
}

export default withRouter(ModalPopup);