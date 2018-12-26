import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import changeTheme from './changeTheme';
import changeHeader from './changeHeader';

export default combineReducers({
    dark_mode: changeTheme,
    changeHeader,
    routerReducer
})
