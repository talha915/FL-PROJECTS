import localData from '../Data/Data.json';

// Contant
import { setting_sidebar } from '../constants/constants';

export const settingsSidebar=()=> {
    return {
        type: setting_sidebar,
        payload: localData.settings.sidebar,
    }
}