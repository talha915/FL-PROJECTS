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

function Popup(props) {
    console.log("Props: ", props);

    const getButton=(data)=> {
        let btn = data.btn.map((item, index)=> {
            return(
                <Button key={index}>
                    {item.title}
                </Button>
            )
        })
        return btn;
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>
                <h6>
                    {props.modalState.title}
                </h6>
            </ModalHeader>
            <ModalBody>
                <p>
                    {props.modalState.content}
                </p>
            </ModalBody>
            <ModalFooter>
                {getButton(props.modalState)}
            </ModalFooter>
        </Modal>
    )
}

export default withRouter(Popup);