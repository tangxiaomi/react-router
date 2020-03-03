// useContext来实现父子组件的传值  那怎么样实现 子组件像父组件传值？
import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext(); // ① 创建共享的组件（上下文）, 用来包裹子组件

function ChildCom(){
  let count = useContext(CountContext); // ③ 子组件接受值
  return (<h2>{count}</h2>)
}

function Example3(){
const [count, setCount] = useState(0);
 return (
  <div>
    <p>display {count}</p>
    <button onClick={() => {setCount(count + 1)}}>click {count}</button>
    {/* ② 给子组件共享值 */}
    <CountContext.Provider value={count}> 
      {/* value是要共享的值， 这里包裹的是要分享给的子组件 */}
      <ChildCom/>
    </CountContext.Provider>
  </div>
  )
}

export default Example3;
