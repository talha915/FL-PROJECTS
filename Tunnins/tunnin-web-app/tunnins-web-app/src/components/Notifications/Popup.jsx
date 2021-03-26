import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionPopup } from '../../actions/sessionDetailUserPop';

// Constants
import { cancel_session, close_modal, cancelled_session } from '../../constants/constants';

const Popup = (props) => {

    console.log("Props: ", props);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const dispatch = useDispatch();
    const [popUpData, setPopupData] = useState({});

    useEffect(() => {
        dispatchCancelPop();
    }, []);

    const dispatchCancelPop = () => {
        dispatch(sessionPopup(cancel_session));
    }

    const sessionClose = useSelector(state => state.sessionDetailUserPop);
    console.log("New Session", sessionClose);

    const getBtns = (btns) => {
        let btn = btns.map((data, index) => {
            return (
                <Button color="primary" key={index} onClick={()=>getAction(data, index)}>
                    {data.title}
                </Button>
            )
        });
        return btn;
    }

    const getAction=(data, index)=> {
        if(data.action === "close") {
            dispatch(sessionPopup(close_modal));
        }
        else {
            dispatch(sessionPopup(cancelled_session));
        }     
    }

    const getModal = () => {
        let state = sessionClose.modalState;
        console.log("Session CLose: ", sessionClose);
        if (state.hasOwnProperty('content')) {
            return (
                <Modal className={sessionClose.modalState.popupClass+" tunnin-popup modal-dialog-centered"} isOpen={sessionClose.popUp}>
                    <ModalBody className="justify-content-center" >
                        <p className="text-center opacity-69">
                            {state.content}
                        </p>
                    </ModalBody>
                    <ModalFooter className="border-0 justify-content-center">
                        {getBtns(state.btns)}
                    </ModalFooter>
                </Modal>
            );
        }
    }

    return (
        <div>
            {getModal()}
        </div>
    );
}

export default Popup;