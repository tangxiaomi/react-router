import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          // mock后端返回的数据
          list:[
            {cid: 123, content: 'test1'},
            {cid: 456, content: 'test2'},
            {cid: 789, content: 'test3'}
          ]
         }
        //  编程时的重定向 官方文档就是这样写的 业务逻辑复杂的时候这样写
        this.props.history.push('/home/')
    }
    render() { 
        return (
          <div>
            {/* 点击首页的时候会重定向到home页面（这是标签的方式） */}
            {/* <Redirect to='/home/'/> */}
            <h2>JSPang.com</h2>
            <ul>
              {
                this.state.list.map((list, index) => {
                 return (
                    <li key={index}>
                      <Link to={'./list/'+list.cid}>{list.content}</Link>
                    </li>
                 )
                })
              }
            </ul>
          </div>
        );
    }
}

export default Index;
