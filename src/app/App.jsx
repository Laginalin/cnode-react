// 定义项目容器组件
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import connect from '../redux/connect';

// 引入项目组件
import Page from '../views/Page/Page';
import Topic from '../views/Topic/Topic';
import AddTopic from '../views/AddTopic/AddTopic';
import Login from '../views/Login/Login';
import About from '../views/About/About';
// import AuthorizedRoute from '../utils/AuthorizedRoute';
import User from '../views/User/User';
import Message from '../views/Message/Message';
import SideMenu from '../components/SideMenu/SideMenu';

class App extends Component {
    render() {
        return (
            <div className={"app-container " + dark_mode ? "dark-theme" : ""}>
                <SideMenu className="cnode-nav-container"></SideMenu>
                <div className="cnode-main-container" style={{height: (document.body.clientHeight - 40) + 'px'}}>
                    <Switch>
                        <Route path="/topic/:type" component={Page}></Route>
                        <Route path="/detail/:topicID" component={Topic}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/about" component={About}></Route>
                        {/* 定义需要登陆之后才可以看到的页面 */}
                        <Route path="/user/:loginname" component={User}></Route>
                        <Route path="/message" component={Message}></Route>
                        <Route path="/addTopic" component={AddTopic}></Route>
                        {/* 默认路由 */}
                        <Route path="*" component={Page}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
