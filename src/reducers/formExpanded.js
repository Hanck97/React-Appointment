/*
 * @Author: Hancock 
 * @Date: 2017-11-27 19:35:22 
 * 处理表单的显示和隐藏
*/

import { TOGGLE_FORM_EXPANDED } from '../constants'


const formExpanded = (state=false, action) => {
    switch(action.type) {
        case TOGGLE_FORM_EXPANDED:
            return !state;
        default:
            return state;    

    }

};

export default formExpanded;