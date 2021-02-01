import React, { useState, useEffect }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { close_modal, add_session_modal } from '../../constants/constants';


function Popup(props) {

    const dispatch = useDispatch();

    

    const modalOperate=(item)=> {
        dispatch(sessionModal(close_modal));
        if(props.action_type == add_session_modal) {
            let routeTo = item.route;
            props.history.push(routeTo);
        }
    }

    const getButton=(data)=> {
        let btn = data.btn.map((item, index)=> {
            return(
                <Button key={index} onClick={()=>modalOperate(item)}>
                    {item.title}
                </Button>
            )
        })
        return btn;
    }


    return(
        <Modal isOpen={props.modalState.popUp}>
            <ModalHeader>
                <div>
                    <h6>
                        {props.modalState.modalState.title}
                    </h6>
                </div>          
            </ModalHeader>
            <ModalBody>
                <p>
                    {props.modalState.modalState.content}
                </p>
            </ModalBody>
            <ModalFooter>
                {getButton(props.modalState.modalState)}
            </ModalFooter>
        </Modal>
    )
}

export default withRouter(Popup);