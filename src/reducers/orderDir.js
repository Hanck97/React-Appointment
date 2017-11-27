/*
 * @Author: Hancock 
 * @Date: 2017-11-27 19:42:23 
*/
import { CHANGE_ORDER_DIR } from '../constants';

const orderDir = (state=null, action) => {
    switch (action.type) {
        case CHANGE_ORDER_DIR:
            return action.orderDir
        default:
            return state;
    }
};

export default orderDir;