import React, { useState }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { close_modal, add_session_modal, cancelled_session_modal } from '../../constants/constants';

import done from '../../images/done.png';


function Popup(props) {

    const dispatch = useDispatch();

    const [cancelAction, cancelled] = useState('');    

    const modalOperate=(item)=> {
        console.log("Item: ", item);
        if(item.hasOwnProperty("action")) {
            if(item.action === "yes") {
                dispatch(sessionModal(close_modal));
                cancelled("yes");
                dispatch(sessionModal(cancelled_session_modal));
            }
            else {
                dispatch(sessionModal(close_modal));
            }
        }
        else if(item.hasOwnProperty("route")) {
            dispatch(sessionModal(close_modal));
            props.history.push(item.route);
        }
        else {
            dispatch(sessionModal(close_modal));
            if(props.action_type == add_session_modal) {
                let routeTo = item.route;
                props.history.push(routeTo);
            }
        }
    }

    const getButton=(data)=> {
        let btn = data.btn.map((item, index)=> {
            return(
                <Button color="primary" key={index} onClick={()=>modalOperate(item)}>
                    {item.title}
                </Button>
            )
        })
        return btn;
    }

    const popup = useSelector(state => state.sessionModal);

    const getModal=()=> {  
        return(
            <Modal className="tunnin-popup modal-dialog-centered" isOpen={popup.hasOwnProperty("popUp") ? popup.popUp : props.modalState.popUp}>
                <div className="text-center">
                    <img src={done} alt="Reset Password" />
                </div>
                <ModalHeader className="border-0 justify-content-center pb-0">
                    {popup.hasOwnProperty("title") ? popup.title : props.modalState.modalState.title}
                </ModalHeader>
                <ModalBody className="justify-content-center" >
                    <p className="text-center opacity-69">
                        {popup.hasOwnProperty("content") ? popup.content : props.modalState.modalState.content}
                    </p>
                </ModalBody>
                <ModalFooter className="border-0 justify-content-center">
                    {getButton(popup.hasOwnProperty("btn") ? popup.btn : props.modalState.modalState)}
                </ModalFooter>
            </Modal>
        );      
    }

    return(
        <div>
            {getModal()}
        </div>
    )
}

export default withRouter(Popup);