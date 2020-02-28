import React from "react";
// 重新定义BrowserRouter  link相当于是a标签 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './page/index';
import List from './page/list';
import Home from './page/home'

// 1.动态路由的步骤(设置规则 传递值 接受值 显示内容)
// 2.重定向（2种方式 ==》 标签式和编程式）重定向和跳转有一个重要的区别，就是跳转式可以用浏览器的回退按钮返回上一级的，而重定向是不可以的。
// 3.路由嵌套 实现一级路由 二级路由
function AppRouter(){
  return(
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        {/*② 传值123 */}
        <li><Link to="/list/123">列表页</Link></li>

        {/* exact是精确匹配  component是对应的显示的视图组件 */}
        <Route path="/" exact component={Index} />
        {/* ①:id是设置规则 */}
        <Route path="/list/:id" component={List}/>
        <Route path="/home/" component={Home}/>
      </ul>
    </Router>
  )
}

export default AppRouter;
