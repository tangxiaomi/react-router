// userReducer + useContext = redux;
import React, {useReducer} from 'react';

function ReducerDemo(){
  // 传入两个参数 ①相关执行的方法 ②变量的初始值
  // 返回两个参数
  const [count, dispatch] = useReducer((state, action) => {// 这个函数的参数 一个是状态，一个是如何控制状态
    switch(action){
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  }, 0)

  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => {dispatch('add')}}>Increment</button>
      <button onClick={() => {dispatch('sub')}}>Descrement</button>
    </div>
  )
}

export default ReducerDemo;
