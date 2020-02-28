//二级路由 不需要用router进行包裹
import React from 'react';
import { Route, Link } from 'react-router-dom';
import ReactPage from './video/reactPage';
import Flutter from './video/flutter';
import Vue from './video/view';


function Video(){
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage">React教程</Link></li>
          <li><Link to="/video/flutterpage">Flutter教程</Link></li>
          <li><Link to="/video/vuepage">Vue教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div>视频教程</div>
        <Route path="/video/reactpage" component={ReactPage}/>
        <Route path="/video/flutterpage" component={Flutter}/>
        <Route path="/video/vuepage" component={Vue}/>
      </div>
    </div>
  )
}

export default Video;
