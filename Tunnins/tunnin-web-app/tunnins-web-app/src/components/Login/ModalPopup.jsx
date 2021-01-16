import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Style
import '../../styles/login.scss';

function ModalPopup(props) {

    const [loginForm, setForm] = useState({});
    

    useEffect(() => {
        setFormData();
    }, []);

    const setFormData = () => {
        setForm(props.loginData);
    }

    const updateData=()=> {
        console.log("Time To Update Modal");
    }

    return (
        <Modal isOpen={props.isOpen} >
            <ModalHeader >{loginForm.forgot}</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">{loginForm.email}</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="dodgeui2020@gmail.com" />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={()=>updateData()}>Send</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalPopup;