import React, { useState, useEffect }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionModal } from '../../actions/sessionModal';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { close_modal, add_session_modal, cancelled_session_modal } from '../../constants/constants';


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
                <Button key={index} onClick={()=>modalOperate(item)}>
                    {item.title}
                </Button>
            )
        })
        return btn;
    }

    const popup = useSelector(state => state.sessionModal);

    const getModal=()=> {  
        return(
            <Modal isOpen={popup.hasOwnProperty("popUp") ? popup.popUp : props.modalState.popUp}>
                <ModalHeader>
                    <div>
                        <h6>
                            {popup.hasOwnProperty("title") ? popup.title : props.modalState.modalState.title}
                        </h6>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <p>
                        {popup.hasOwnProperty("content") ? popup.content : props.modalState.modalState.content}
                    </p>
                </ModalBody>
                <ModalFooter>
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