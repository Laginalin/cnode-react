// 定义处理切换导航栏头部标题
import { CHANGE_HEADER, changeHeader } from "../actions";

let initialState = {
    loading: false,
    title: ''
}
export default function(state=initialState, action) {
    if(action.type === CHANGE_HEADER) {
        return Object.assign({}, state, {
            loading: action.loading,
            title: action.title
        })
    }
    return state;
}
