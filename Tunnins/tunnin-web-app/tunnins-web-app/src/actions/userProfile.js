import localData from '../Data/Data.json';

// Constants
import { user_profile, user_edit_profile } from '../constants/constants';

export const userProfile=(type)=> {
    if(type === user_profile) {
        return {
            type: user_profile,
            payload: localData.userprofile,
        }
    }
    else {
        let editUserProfile = JSON.parse(JSON.stringify(localData.userprofile));
        editUserProfile.title = editUserProfile.editTitle;
        let btns = editUserProfile.btns;
        for(let i=0; i<btns.length; i++) {
            btns[i].flag = !btns[i].flag;
        }
        return {
            type: user_edit_profile,
            payload: editUserProfile
        }
    }
}

