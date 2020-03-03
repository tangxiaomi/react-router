import React, { useState } from "react";

function Example1(){
  // 多状态声明 React是根据useState出现的顺序来确定的
  const [age, setAge]=useState(18); // 数组中的一定要写成这样吗？
  const [sex, setSex]=useState('nv');
  const [job, setJob]=useState('前端开发');

  return(
    <div>
      <p>今年{age}岁</p>
      <p>性别{sex}</p>
      <p>工作{job}</p>
      <button onClick={()=> {setAge(age+1)}}>加一岁</button>
    </div>
  )
}
export default Example1;
