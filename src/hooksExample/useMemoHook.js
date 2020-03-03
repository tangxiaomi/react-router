// shouldComponentUpdate 组件更新之前  用来对比状态，需要就更新，不需要就不更新
// 但是useEffect没有这个 父子组件，父组件更新，会让子组件里的方法都会执行一遍所以性能会受影响
import React, { useState, useMemo } from 'react';

function Memo(){
  const [red, setRed] = useState('小红在等待状态');
  const [zhiling, setZhiling] = useState('之领在等待状态');
  return (
    // 可以直接用空标签包裹
    <>
     <button onClick={() => {setRed(new Date().getTime())}}>Red</button>
     <button onClick={() => {setZhiling(new Date().getTime()+'zhiling is coming')}}>zhiling</button>
     {/* // 什么时候是单标签 什么时候是双标签 ？*/}
     <ChildComponent name={red}>{zhiling}</ChildComponent>
    </>
  )
}

function ChildComponent({name, children}){ // 父组件改变 子组件也跟着改变
  function changeRed(){
    console.log('she is coming, red');
    return name+',red is coming';
  }

  const actionRed = useMemo(() => changeRed(name), [name]); // 只有name是小红的时候才会让子组件进行改变
  return (
    <>
      <div>{actionRed}</div>
      <div>{children}</div>
    </>
  )
}

export default Memo;
