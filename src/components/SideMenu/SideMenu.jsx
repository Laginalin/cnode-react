//定义抽屉组件的容器组件，负责管理数据
import React, { Component } from 'react';
import Aside from './Aside';
import Header from './Header';

class SideMenu extends Component {
    render() {
        return (
            <div className="cnode-sidemenu">
                <Header></Header>
                <Aside></Aside>
            </div>
        )
    }
}

export default SideMenu;
