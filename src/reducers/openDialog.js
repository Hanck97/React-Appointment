/*
 * @Author: Hancock 
 * @Date: 2017-11-27 19:39:25 
 表单验证错误的提示对话框
*/
import { TOGGLE_DIALOG } from '../constants';

const openDialog = (state=false, action) => {
    switch (action.type) {
        case TOGGLE_DIALOG:
            return !state;
        default:
            return state;
    }
};

export default openDialog;
