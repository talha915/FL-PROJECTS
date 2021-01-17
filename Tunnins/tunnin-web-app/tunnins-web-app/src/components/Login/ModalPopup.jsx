import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Style
import '../../styles/login.scss';

function ModalPopup(props) {

    const updateData = () => {
        console.log("Time To Update Modal");
    }

    const getModal = () => {
        if(Object.keys(props.loginData).length > 0) {
            console.log("Props", props.loginData.modalState);
            let data = props.loginData.modalState;
            return (
                <Modal isOpen={props.isOpen} >
                    <ModalHeader >{data.heading}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">{data.email}</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="dodgeui2020@gmail.com" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => updateData()}>Send</Button>
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