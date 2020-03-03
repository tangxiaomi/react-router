import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// 因为useEffect是副作用，所以之前的componentWillUnmount可以理解为解绑副作用，现在用useEffect来实现componentWillUnmount
// useEffect的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，
   // 意思是当状态值发生变化时，我们才进行解绑。
   // 但是当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数。
function Index(){
  useEffect(() => {
    console.log('useEffect => 老弟，来啦 Index页面');
    // 用返回一个函数的形式进行解绑
    return () => {
      console.log('老弟，你走啦Index页面')
    }
  }, []) // 但是当传空数组[]时，就是当组件将被销毁时才进行解绑，
 return (
   <h2>我是首页</h2>
 )
}

function List(){
  useEffect(() => {
    console.log('useEffect => 老弟，来啦 List页面')
  })
  return (
    <h3>我是列表页</h3>
  )
}

function Example2(){
  // 多状态声明 React是根据useState出现的顺序来确定的
  const [age, setAge]=useState(18); // 数组中的一定要写成这样吗？
  const [sex, setSex]=useState('nv');
  const [job, setJob]=useState('前端开发');

  // useEffect代替之前的componentDidMount和componentDidUpdate（这些生命周期函数被称作是”副作用“）
  // useEffect是异步的 没办法在页面变化的时候进行函数的执行，因为它不是同步的，不会阻碍浏览器的视图更新
  useEffect(() => {
    console.log('useEffect execution');
    return () => {
      console.log('haha');
    }
  }, [age]) // 每次age发生变化的时候进行解绑 就会执行useEffect的return内容
  return(
    <div>
      <p>今年{age}岁</p>
      <p>性别{sex}</p>
      <p>工作{job}</p>
      <button onClick={()=> {setAge(age+1)}}>加一岁</button>
     <Router>
       <ul>
       <li> <Link to='/'>首页</Link></li>
       <li> <Link to='/list/'>列表页</Link></li>
       </ul>
      <Route path='/' exact component={Index}/>
      <Route path='/list/' component={List}/>
    </Router>
    </div>
  )
}
export default Example2;
