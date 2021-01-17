import React from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateModal } from '../../actions/updateModal';

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
    }

    const getModal = () => {
        if (Object.keys(props.loginData).length > 0) {
            let data = props.loginData.modalState;
            return (
                <Modal isOpen={props.loginData.popUp} >
                    <ModalHeader >{data.heading}</ModalHeader>
                    <ModalBody>
                        <Form>
                            {data.hasOwnProperty('text') ?
                                <FormGroup>
                                    <p>
                                        {data.text}
                                    </p>
                                </FormGroup>
                                :
                                <FormGroup>
                                    <Label for="exampleEmail">{data.email}</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="dodgeui2020@gmail.com" />
                                </FormGroup>
                            }
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {data.hasOwnProperty('text') ?
                            <Button color="secondary" onClick={() => closeModal()}>Ok</Button>
                            :
                            <Button color="secondary" onClick={() => updateData()}>Send</Button>
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

export default ModalPopup;