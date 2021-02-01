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

function Popup() {
    return(
        <Modal isOpen={true}>
            <ModalHeader>
                
            </ModalHeader>
        </Modal>
    )
}

export default Popup;