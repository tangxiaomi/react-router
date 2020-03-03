// useRef ①获取DOM元素， ②用来保存变量
import React, {useRef, useState, useEffect} from 'react';

function Ref(){
  const inputEl = useRef(null); // 获取元素
  const onButtonClick = () => {
    inputEl.current.value='hello world';
    console.log(inputEl);
  }

  const [text, setText] = useState('world');
  const textRef = useRef(); // 获取数据

  useEffect(() => {
    textRef.current = text; // 保存数据 现实中并不常用
    console.log(textRef.current);
  })

  return (
    <>
      <input ref={inputEl} type='text'/>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/>
      <input value={text} onChange={(e) => {setText(e.target.value)}}/>
    </>
  )
}

export default Ref;
