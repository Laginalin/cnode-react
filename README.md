# 项目介绍

## 说明
---
该项目是基于cnode社区提供的api开发手机端的页面，react的入门练习项目，没有使用脚手架工具，使用webpack编译，感谢cnode社区提供的api

### 技术栈

- react
- react-dom
- react-router
- react-router-dom
- redux
- react-redux
- marked
- less
- webpack

## 目标功能
---

- [ ] 侧边栏抽屉显示
- [ ] 侧边栏切换显示不同标签下的主题页面
- [ ] 夜间模式切换
- [ ] 标签主题页面滑动到底部加载更多数据
- [ ] 带有过度动画的返回顶部功能
- [ ] 点击显示某个主题页面,markdown文档美化，代码高亮
- [ ] 权限验证
- [ ] 发表新主题功能
- [ ] 发布主题markdown语法支持
- [ ] 登陆功能
- [ ] 回复某个主题
- [ ] 回复具体某个人功能
- [ ] 查看个人消息
- [ ] 标记所有未读为已读
- [ ] 标记单个为已读
- [ ] 查看个人回复，个人发布主题

## 项目布局
---

```
|—— build                              
|   |—— main.js
|
|—— src                                 开发路径
|    |—— app                            容器组件
|    |       App.jsx
|    |       App.less                   
|    |
|    |—— components                     公用组件
|    |   |—— SideMenu                   抽屉组件
|    |   |   |—— Aside.jsx              抽屉侧栏组件
|    |   |   |—— Aside.less
|    |   |   |—— Header.jsx             抽屉头部组件
|    |   |   |—— Header.less
|    |   |
|    |   |—— Tab                        标签组件
|    |       |—— Tab.jsx
|    |       |—— Tab.less
|    |
|    |—— redux                          redux
|    |   |—— actions                    actions消息
|    |   |   |—— index.jsx
|    |   |
|    |   |—— reducers                   reducer处理方程
|    |       |—— index.jsx
|    |   |—— connect.es                 映射组件
|    |   |—— store.es                   redux数据
|    |   
|    |—— utils                          工具类
|    |   |—— AuthorizedRoute.jsx        权限验证
|    |   |—— Http.jsx                   axios请求
|    |
|    |—— views                          页面视图
|        |—— AddTopic                   发布主题(有权限)
|        |   |—— AddTopic.jsx
|        |   |—— AddTopic.less
|        |
|        |—— Login                      登陆页面
|        |   |—— Login.jsx
|        |   |—— Login.less
|        |
|        |—— Message                    查看用户消息(有权限)
|        |   |—— Message.jsx
|        |   |—— Message.less
|        |
|        |—— Page                       标签页面组件，显示标签内的主题
|        |   |—— Page.jsx
|        |   |—— Page.less
|        |   |
|        |   |—— components             标签页面通用组件
|        |       |—— TopicCard.jsx      标签单主题卡组件
|        |       |—— TopicCard.less
|        |
|        |—— Topic                      主题详情页面，显示主题详情
|        |   |—— Topic.jsx
|        |   |—— Topic.less
|        |   |
|        |   |—— components             主题详情页面通用组件
|        |       |—— comment            用户评论组件
|        |       |   |—— Comment.jsx
|        |       |   |—— Comment.less
|        |       |
|        |       |—— content            主题正文组件
|        |           |—— content.jsx
|        |           |—— content.less
|        |
|        |—— User                       用户页面组件
|            |—— User.jsx
|            |—— User.less
|
|        |—— base.less                  页面基础样式
|        |—— index.html                 页面模板文件
|        |—— index.jsx                  项目入口文件
|        |—— route.jsx                  路由组件
|
|—— .babelrc                            扩展babel
|—— app.js                              开发用服务器
|—— index.html                          页面入口文件
|—— README.md                           项目介绍文件
|—— webpack.config.js                   webpack配置文件

```
