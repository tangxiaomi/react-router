import React from 'react';
import Food from './workplace/food';
import Work from './workplace/work';
import { Route, Link } from 'react-router-dom';

// 二级路由不用加./
function WorkPlace(){
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/food">饮食习惯的报告</Link></li>
          <li><Link to="/workplace/work">工作效率的报告</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <h3>职场生活</h3>
        <Route path="/workplace/food" component={Food}></Route>
        <Route path="/workplace/work" component={Work}></Route>
      </div>
    </div>
  )
}

export default WorkPlace;
