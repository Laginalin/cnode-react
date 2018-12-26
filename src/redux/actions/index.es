
export const CHANGE_THEME = 'change_app_theme';
export const CHANGE_HEADER = 'change_app_header';


/**
 * 定义夜间模式的开关
 * @param  {Boolean} isOn true 表示 开启， false 表示关闭
 * @return {Ojbect}       action 对象
 */
export function changeTheme(isOn) {
    return {
        type: CHANGE_THEME,
        dark_mode: isOn
    }
}

/**
 * 定义更改抽屉组件头部显示标题内容
 * @param  {String} title 需要切换的标题，英文格式
 * @return {Object}       action 对象
 */
export function changeHeader(title) {
    return {
        type: CHANGE_HEADER,
        title
    }
}
