// 定义切换主题的reducer
import { CHANGE_THEME, changeTheme } from '../actions';

export default function(state=false, action) {
    if(action.type === CHANGE_THEME) {
        return action.dark_mode;
    }
    return state;
}
