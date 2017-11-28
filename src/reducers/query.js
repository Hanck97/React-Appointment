/*
 * @Author: Hancock 
 * @Date: 2017-11-27 19:41:13 
 * 查询
*/
import { QUERY } from '../constants';

const query = (state=null, action) => {
    switch (action.type) {
        case QUERY:
            return action.query;
        default:
            return state;
    }
}

export default query;