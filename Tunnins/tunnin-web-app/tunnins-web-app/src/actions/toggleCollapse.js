import { toggle_faq } from '../constants/constants';

export const toggleCollapse=(allFaqs, selectedData, index)=> {
    let faqs = JSON.parse(JSON.stringify(allFaqs));
    for(let i=0; i<faqs.length; i++) {
        if(faqs[i].flag === true) {
            faqs[i].flag = false;
        }
        if(selectedData._id === faqs[i]._id) {
            faqs[i].flag = !faqs[i].flag;
        }
    }
    return {
        type: toggle_faq,
        payload: faqs
    }
}