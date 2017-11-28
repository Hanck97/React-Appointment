/*
 * @Author: Hancock 
 * @Date: 2017-11-27 19:13:30 
*/

import { createStore} from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import reducers from './reducers'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store= {store}>
<App/>
</Provider>,
document.getElementById('root')
);