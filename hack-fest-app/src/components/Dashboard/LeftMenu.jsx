import React, { useEffect, useState } from 'react';
import Data from '../Data/Data.json';
import '../styles/leftmenu.css';
import { Button } from 'reactstrap';

function LeftMenu() {

    const [leftDash, setLeftMenu] = useState('');

    useEffect(()=>{
        setLeftDash();
    },[]);

    const setLeftDash=()=> {
        if(Data.hasOwnProperty('dashboard')) {
            if(Data.dashboard.hasOwnProperty('leftmenu')) {
                setLeftMenu(Data.dashboard.leftmenu);
            }
        }
    }

    const getLeftMenu=()=> {
        if(leftDash.hasOwnProperty('heading') && leftDash.hasOwnProperty('btns')) {
            return(
                <div>
                    <h2 className="main-div">
                        {leftDash.heading}
                    </h2>
                    {getBtns(leftDash.btns)}
                </div>
            )
        }
    }

    const getBtns=(btns)=> {
        let buttons = btns.map((data, index)=> {
            return(
                <div key={index} className="btns-style">
                    <Button >
                        {data.title}
                    </Button>
                </div>
            );
        });
        return buttons;
    }

    return(
        <div className="parent">
            {getLeftMenu()}
        </div>
    )
}
export default LeftMenu;